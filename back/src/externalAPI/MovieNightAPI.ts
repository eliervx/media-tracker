import { Injectable, Logger, Inject } from '@nestjs/common';
import * as streamingAvailability from "streaming-availability";
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { RapidAPIService } from './RapidAPI';

@Injectable()
export class MovieNightAPIService {

  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private rapidAPIService : RapidAPIService
  ) {}

  private get apiKey(): string {
    return process.env.MOVIE_NIGHT_API_KEY || '';
  }

  private readonly logger = new Logger(MovieNightAPIService.name);

  private readonly client = new streamingAvailability.Client(new streamingAvailability.Configuration({
	  apiKey: process.env.MOVIE_NIGHT_API_KEY
  }));

  

  public async getMediaStreamingOptions(tmdbId: number, isMovie: boolean = true, country: string = 'fr') {
    if (!this.apiKey) {
      this.logger.error('[MovieNightAPI] Clé API manquante dans le fichier .env !');
      return null;
    }

    // 1. Remplace {type} par 'movie' ou 'series'
    const type = isMovie ? 'movie' : 'series';

    // 2. Clé de cache unique (ex: rapidapi_streaming_movie_21778_fr)
    const cacheKey = `movienightapi_streaming_${type}_${tmdbId}`;

    // 3. Vérification dans le cache
    const cachedData = await this.cacheManager.get(cacheKey);
    if (cachedData) {
      this.logger.log(`[Cache Hit] Données récupérées du cache pour ${type} ID: ${tmdbId}`);
      return cachedData;
    }

    try {

      this.logger.log(`[API Call] Requête vers MovieNightAPI pour ${type} ID: ${tmdbId}...`);

      const data = await this.client.showsApi.getShow({
        id: `${type}/${tmdbId}`,
      }); 

      if(!data){
        this.logger.error(`[MovieNightAPI Error] Status ERROR pour l'ID ${tmdbId}`);
        return [];
      }

      await this.cacheManager.set(cacheKey, data.streamingOptions.fr, 518_400_000);

      return data.streamingOptions.fr;

    } catch (error) {
      this.logger.error(`[MovieNightAPI Exception] Erreur lors de l'appel pour l'ID ${tmdbId}:`, error);
      try {
        this.logger.log(`[API Call] Requête vers RapidAPI pour ${type} ID: ${tmdbId}...`);
        const data = this.rapidAPIService.getMediaStreamingOptions(tmdbId,isMovie,country);

        await this.cacheManager.set(cacheKey, data, 518_400_000);
        return data
      }
      catch (error) {
        this.logger.error(`[RapidAPIService Exception] Erreur lors de l'appel pour l'ID ${tmdbId}:`, error);
        return []
      }
    }
  }
}