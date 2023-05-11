import { Module } from '@nestjs/common';
import {UsersController} from "../../users/users.controller";
import {UsersService} from "../../services/users/users.service";
import {User, UserSchema} from "../../shema/user";
import {MongooseModule} from "@nestjs/mongoose";
import {AuthService} from "../../services/auth/auth.service";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constants";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }],),
        PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
    })],

    controllers: [UsersController],
    providers: [UsersService, AuthService]
})
export class UsersModule {}
