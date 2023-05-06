import { Module } from '@nestjs/common';
import {UsersController} from "./users.controller";
import {UsersService} from "../services/users/users.service";
import {User, UserSchema} from "../shema/user";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
