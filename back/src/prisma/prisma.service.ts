import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';

dotenv.config();

// On prépare le traducteur réseau en dehors de la classe
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // 💡 On passe l'adaptateur au constructeur parent (super) 
    // pour satisfaire les exigences strictes de Prisma v7 !
    super({ adapter });
  }

  async onModuleInit() {
    console.log('🔌 Connexion sécurisée établie avec le Pool PostgreSQL (Docker)...');
    await this.$connect();
    console.log('✅ Le client Prisma v7 est prêt !');
  }

  async onModuleDestroy() {
    console.log('🔌 Fermeture du client Prisma...');
    await this.$disconnect();
    // En entreprise, on ferme aussi le pool de connexions pour ne pas laisser de sockets ouverts
    await pool.end();
    console.log('🛑 Pool PostgreSQL fermé.');
  }
}