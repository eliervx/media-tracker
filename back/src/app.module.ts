import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { MediasModule } from './medias/medias.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 6 * 24 * 60 * 60 * 1000, // 6 jours en millisecondes (par défaut)
      max: 1000, // Nombre max d'éléments stockés en mémoire
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,    // Initialise notre connexion globale Prisma v7 à PostgreSQL (Docker)
    AuthModule ,
    MediasModule // Medias + Providers
  ],
})
export class AppModule {}
