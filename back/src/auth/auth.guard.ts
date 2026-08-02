// src/auth/auth.guard.ts (ou jwt-auth.guard.ts)
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException("Tu n'es pas connecté.");
    }
    
    try {
      // C'est ici que le token est décodé
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET, // Ta clé secrète
      });
      
      // On injecte le payload (qui contient l'id de l'utilisateur) dans la requête
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Token invalide ou expiré.');
    }
    
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}