import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";
import {JwtStrategyService} from "../../services/authentication/jwt-stategy/jwt-stategy.service";
import {ToursService} from "../../services/tours/tours.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../../shema/user";
import {Tour, TourSchema} from "../../shema/tour";
import {TourItemController} from "../tour-item/tour-item.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }],),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    })],

  controllers: [ToursController, TourItemController],
  providers: [ToursService, JwtStrategyService]
})
export class ToursModule {}
