import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MovieNightAPIService } from '../externalAPI/MovieNightAPI';
import { of } from 'rxjs';
import { link } from 'fs';

interface FilteredLanguagesResult {
  mediaTmdbId: number;
  providerTmdbId: number;
  providerName: string;
  offers: Array<{
    type: string;             // 'FLATRATE' (Abonnement), 'RENT', 'BUY', etc.
    audio: string[];          // ex: ["fr", "en"]
    subtitles: string[];      // ex: ["fr", "en", "es"]
  }>;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


@Injectable()
export class MediasService {
  constructor(private prisma: PrismaService, private readonly movieNightAPIService: MovieNightAPIService
  ) {
  }

  async onModuleInit() {
    await this.handleDailyProviderUpdate();
  }

  async findAllUserMedia(userId: number) {
    return this.prisma.userMedia.findMany({
      where: { userId },
      include: {
        media: {
          include: {
            providers: {
              include: {
                provider: true,
              },
            },
          },
        },
      },
      orderBy: [
        {
          status: "asc"
        },
        {
          lastUpdate: "desc"
        },
      ]
    });
  }

  async addUserMedia(userId: number, mediaData: { id: number, title: string, type: string, posterPath: string, releaseDate: Date, description: string }) {
    const media = await this.prisma.media.upsert({
      where: { id: mediaData.id },
      update: {},
      create: {
        id: mediaData.id,
        title: mediaData.title,
        type: mediaData.type,
        posterPath: mediaData.posterPath,
        releaseDate: mediaData.releaseDate ? new Date(mediaData.releaseDate) : null,
        description: mediaData.description
      }
    })

    const dataForGetProviders = {
      id: mediaData.id,
    }

    if (media.lastUpdate !== media.createdAt) {
      const isMovie = mediaData.type === "FILM" ? true : false
      const providers = await this.getProvidersTMBD(dataForGetProviders,isMovie)
      await this.updateMediaProviders(mediaData.id, providers)
    }

    return this.prisma.userMedia.upsert({
      where: {
        userId_mediaId: {
          userId: userId,
          mediaId: media.id,
        },
      },
      update: {},
      create: {
        mediaId: media.id,
        userId: userId,
        status: 'A_VOIR',
      }
    })
  }

  async searchMediaTMBD(query: string, type : string) {
    try {
      const url = `https://api.themoviedb.org/3/search/${type}?query=${query}&language=fr-FR`;
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', Authorization: `Bearer ${process.env.TMBD_TOKEN}` }
      };

      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    }
    catch (e) {
      console.error(e)
    }
  }

  async getImdbIdFromTmdb(tmdbId: number, isMovie: boolean = true): Promise<string | null> {
    const type = isMovie ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/${type}/${tmdbId}/external_ids`;
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', Authorization: `Bearer ${process.env.TMBD_TOKEN}` }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.error(`[TMDb Error] Impossible de récupérer les external_ids pour ${tmdbId}`);
        return null;
      }

      const data = await response.json();

      // TMDb renvoie un objet avec la clé imdb_id (ex: "tt4633694")
      return data.imdb_id || null;
    } catch (error) {
      console.error(`[TMDb Exception] Erreur lors de la récupération de l'IMDb ID :`, error);
      return null;
    }
  }

  //With /watch/providers from JustWatch
  async getProvidersTMBD(mediaData: { id: number }, isMovie : boolean = true) {

    const suffixe = isMovie ? "movie" : "tv"
    const countryCode = process.env.COUNTRY?.toUpperCase();
    const url = `https://api.themoviedb.org/3/${suffixe}/${mediaData.id}/watch/providers`;
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', Authorization: `Bearer ${process.env.TMBD_TOKEN}` }
    };
    const response = await fetch(url, options);
    const data = await response.json();

    const flatrateProviders = data?.results?.[countryCode]?.flatrate || [];

    var allProvidersWithLanguagesData = []
    var allProvidersWithLanguagesRaw = [];

    if (flatrateProviders.length > 0) {
      allProvidersWithLanguagesRaw = await this.movieNightAPIService.getMediaStreamingOptions(mediaData.id,isMovie,process.env.COUNTRY);
      await sleep(100)
    }

    for (var p of allProvidersWithLanguagesRaw) {

      var providers = {
        id: p.service.id,
        name: p.service.name,
        logoUrl: p.service.imageSet.darkThemeImage,
        type: p.type,
        link: p.link,
        audios: p.audios.map((val: any) => val.language),
        subtitles: p.subtitles.map((val: any) => val.locale.language)
      }

      if (providers.type === "addon") {
        providers.id = p.addon.id
        providers.name = `${p.addon.name} (${p.service.name})`
        providers.logoUrl = p.addon.imageSet.darkThemeImage
      }

      allProvidersWithLanguagesData.push(providers);
    }

    return allProvidersWithLanguagesData;

  }

  async updateMediaProviders(mediaId: number, providers: any) {
    await this.prisma.$transaction(async (tx) => {

      //On vérifie que les providers existent
      for (const p of providers) {
        await tx.provider.upsert({
          where: { id: p.id },
          update: {}, // Si existe, on ne touche à rien
          create: {
            id: p.id,
            name: p.name,
            logoUrl: p.logoUrl ? `${p.logoUrl}` : null,
          },
        });
      }

      const subscriptionProviders = providers.filter((p: any) => p.type === "subscription" || p.type === "addon")

      const createdProviders = await tx.mediaProvider.createManyAndReturn({
        data: providers.map((p: any) => ({
          mediaId: mediaId,
          providerId: p.id,
          type: p.type,
          link: p.link,
          audios: p.audios,
          subtitles: p.subtitles
        })),
        skipDuplicates: true,
      });

      if (createdProviders.length > 0) {
        await tx.media.update({
          where: { id: mediaId },
          data: {
            lastUpdate: new Date(),
          },
        });
        console.log(`${createdProviders.length} nouveau(x) provider(s) pour le média ${mediaId} !`);
      }
    });
  }

  async deleteMediaUser(idUser: number, idMedia: number) {

    const deleteReturn = await this.prisma.userMedia.deleteMany(
      {
        where: {
          userId: idUser,
          mediaId: idMedia
        }
      }
    )

    const userMedias = await this.prisma.userMedia.findMany(
      {
        where: {
          mediaId: idMedia
        }
      }
    )

    if (userMedias.length < 1) {
      await this.prisma.media.delete(
        {
          where: {
            id: idMedia
          }
        }
      )
    }

    return deleteReturn;
  }

  async setMediaUserStatus(idMediaUser: number, status: 'A_VOIR' | 'VU' | 'EN_COURS') {
    return this.prisma.userMedia.update(
      {
        where: { id: idMediaUser },
        data: {
          status: status
        }
      }
    )
  }




  //Cron
  @Cron(CronExpression.EVERY_WEEK)
  async handleDailyProviderUpdate() {
    console.log('Lancement de la mise à jour hebdomadaire des plateformes de streaming...');

    const now = new Date();

    const mediasData = await this.prisma.media.findMany(
      {
        select: {
          id: true,
          title: true,
          releaseDate: true,
          type : true,
        }
      }
    )

    for (const mediaData of mediasData) {
      try {
        const dataForGetProviders = { id: mediaData.id };
        const isMovie = mediaData.type === "FILM" ? true : false

        // On attend la récupération des providers
        const providers = await this.getProvidersTMBD(dataForGetProviders,isMovie);

        // On attend la mise à jour en BDD
        await this.updateMediaProviders(mediaData.id, providers);

      } catch (error) {
        console.error(`Erreur lors de la mise à jour du média ${mediaData.id}:`, error);
      }
    }
    console.log('Fin de la mise à jour');
  }
}