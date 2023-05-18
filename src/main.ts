import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // dist, раздел выше
  app.useStaticAssets(join(__dirname, '..', 'public'), {prefix: '/public'})
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
  })
  await app.listen(3000);
}
bootstrap();
