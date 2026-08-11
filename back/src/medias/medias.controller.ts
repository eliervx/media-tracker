import { Controller, Get, Post, Body, Req, UseGuards, Query, Delete,Param, ParseIntPipe } from '@nestjs/common';
import { MediasService } from './medias.service';
import { AuthGuard } from '../auth/auth.guard'; // Ajuste le chemin vers ton nouveau Guard

@Controller('api/medias')
@UseGuards(AuthGuard) // Protège toutes les routes avec ton Guard moderne NestJS 11
export class MediasController {
  constructor(private readonly mediasService: MediasService) {}

  @Get()
  async getMyMedia(@Req() req: any) {
    const userId = req.user.sub;
    return this.mediasService.findAllUserMedia(userId);
  }

  @Get('/search')
  async searchMediaTMBD(@Query('query') query: string, @Query('type') type: string) {
    return this.mediasService.searchMediaTMBD(query,type);
  }

  @Post('/add')
  async addMedia(
    @Req() req: any,
    @Body() mediaData: { id: number; title: string; type: string ; posterPath : string, releaseDate : Date, description : string}
  ) {
    const userId = req.user.sub;
    return this.mediasService.addUserMedia(userId, mediaData);
  }

  @Post('/setStatus')
  async setMediaUserStatus(
    @Req() req: any,
    @Body() mediaUserData: { id: number; status: 'A_VOIR' | 'VU' | 'EN_COURS';}
  ) {
    const userId = req.user.sub;
    return this.mediasService.setMediaUserStatus(mediaUserData.id, mediaUserData.status);
  }

  @Delete('/delete/:id')
  async deleteMediaUser(
    @Req() req: any,
    @Param('id', ParseIntPipe) mediaId: number,
  ) {
    const userId = req.user.sub;
    return this.mediasService.deleteMediaUser(userId, mediaId);
  }
}