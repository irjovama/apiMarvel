import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarvelController } from './marvelController/marvel.controller';
import { MarvelApi } from './marvel-api/marvel-api.service';
import { HealthController } from './health/health.controller';


@Module({ 
  imports: [],
  controllers: [AppController, MarvelController, HealthController],
  providers: [AppService, MarvelApi],
})
export class AppModule {}
