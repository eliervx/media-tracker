import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: any) {
    console.log('📥 Requête HTTP reçue : POST /api/auth/signup');
    return this.authService.signup(body.username, body.password);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK) // Renvoie un code 200 au lieu de 201 (comportement standard pour un login)
  async login(@Body() body: any) {
    console.log('📥 Requête HTTP reçue : POST /api/auth/login');
    return this.authService.login(body.username, body.password);
  }
}