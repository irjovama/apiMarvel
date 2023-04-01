import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenv.config();


const port = process.env.PORT || 8090;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle("Api Marvel")
  .setDescription("Api Marvel complete documentation go to <a href='https://developer.marvel.com/docs'>https://developer.marvel.com/docs</a>")
  .setVersion("1.0")
  .addTag("marvel")
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api-docs/v1', app, document);





  await app.listen(port);
}
bootstrap();
