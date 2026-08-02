import { Module } from '@nestjs/common';
import { MediasController } from './medias.controller';
import { MediasService } from './medias.service';
import { MovieNightAPIService } from '../externalAPI/MovieNightAPI';
import { RapidAPIService } from '../externalAPI/RapidAPI';

@Module({
  controllers: [MediasController], // On déclare le contrôleur du domaine
  providers: [MediasService,MovieNightAPIService,RapidAPIService],     // On déclare le service du domaine
})
export class MediasModule {}