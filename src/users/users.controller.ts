import {Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(): string {
        return "all users";
    }
//применение декоратора Param (param - объект)
    @Get( ":id")
    getUserByID(@Param() param): string {
        return "user id is " + param.id;
    }

    @Post()
    sendAllUsers(): string {
        return "user post data";
    }

    @Put()
    updateUsers(): string {
        return "user put data";
    }

    @Delete()
    deleteUsers(): string {
        return "user delete data";
    }

    @Delete( ":id")
    deleteUserByID(@Param() param): string {
        return "user delete is " + param.id;
    }
}
