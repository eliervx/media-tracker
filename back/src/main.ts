import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  console.log('🚀 Initialisation du serveur NestJS d’entreprise...');

  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.useGlobalInterceptors(new LoggingInterceptor());

  await app.listen(3000, '0.0.0.0');
  
  console.log('Serveur prêt et à l’écoute sur : http://localhost:3000');
}

// Lancement de la fonction de démarrage
bootstrap();