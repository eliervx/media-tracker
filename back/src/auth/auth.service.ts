import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste le chemin si nécessaire
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // 1. INSCRIPTION
  async signup(username: string, passwordPlain: string) {
    // Vérifier si le username est déjà pris
    const existingUser = await this.prisma.user.findUnique({
      where: { username },
    });

    if (existingUser) {
      throw new ConflictException("Ce nom d'utilisateur est déjà pris !");
    }

    // Hacher le mot de passe (10 salages)
    const passwordHash = await bcrypt.hash(passwordPlain, 10);

    // Créer l'utilisateur
    const newUser = await this.prisma.user.create({
      data: {
        username,
        password: passwordHash,
      },
    });

    // Retourner l'utilisateur créé (sans le mot de passe pour des raisons de sécurité !)
    return {
      id: newUser.id,
      username: newUser.username,
    };
  }

  // 2. CONNEXION
  async login(username: string, passwordPlain: string) {
    // Chercher l'utilisateur par son pseudo
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new UnauthorizedException("Identifiants incorrects !");
    }

    // Vérifier si le mot de passe correspond
    const isPasswordValid = await bcrypt.compare(passwordPlain, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Identifiants incorrects !");
    }

    // Générer le jeton de sécurité (JWT) avec l'id et le username
    const payload = { sub: user.id, username: user.username };
    
    return {
      access_token: await this.jwtService.signAsync(payload),
      username: user.username,
    };
  }
}