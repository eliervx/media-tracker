import { Injectable, Logger, Inject } from '@nestjs/common';
import * as streamingAvailability from "streaming-availability";
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RapidAPIService {
  private readonly logger = new Logger(RapidAPIService.name);

  private get apiKey(): string {
    return process.env.RAPIDAPI_KEY || '';
  }

  public async getMediaStreamingOptions(tmdbId: number, isMovie: boolean = true, country: string = 'fr') {
    if (!this.apiKey) {
      this.logger.error('[RapidAPI] Clé API manquante dans le fichier .env !');
      return null;
    }

    // 1. Remplace {type} par 'movie' ou 'tv'
    const type = isMovie ? 'movie' : 'tv';

    try {
      const url = `https://streaming-availability.p.rapidapi.com/shows/${type}/${tmdbId}`

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': this.apiKey,
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
      };

      const response = await fetch(url, options);

      // Gestion des erreurs HTTP (ex: 404, 401, 429)
      if (!response.ok) {
        this.logger.error(`[RapidAPI Error] Status ${response.status} pour l'ID ${tmdbId}`);
        return null;
      }

      // 4. Extraction du JSON et retour de la donnée
      const data = await response.json();
      return data.streamingOptions[country];

    } catch (error) {
      this.logger.error(`[RapidAPI Exception] Erreur lors de l'appel pour l'ID ${tmdbId}:`, error);
      return null;
    }
  }
}