import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./controllers/users/users.module";
import {MongooseModule} from "@nestjs/mongoose";
import {ToursModule} from "./controllers/tours/tours.module";


@Module({
  imports: [UsersModule, ToursModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
