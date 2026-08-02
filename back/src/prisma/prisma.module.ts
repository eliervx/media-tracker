import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService], // On indique à NestJS que ce module contient le PrismaService
  exports: [PrismaService],   // On autorise les autres modules à utiliser ce PrismaService
})
export class PrismaModule {}