import {Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "../services/users/users.service";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }
    //конфликт с текущим роутером, если используем декоратор @Query
    @Get()
    getAllUsers(): string {
        return this.userService.getAllUsers();
    }
//применение декоратора Param (param - объект)
    @Get( ":id")
    getUserByID(@Param() param): string {
        return this.userService.getUserByID(param);
    }

    @Post()
    sendAllUsers(): string {
        return  this.userService.sendAllUsers();
    }

    @Put()
    updateUsers(): string {
        return this.userService.updateUsers();
    }

    @Delete()
    deleteUsers(): string {
        return this.userService.deleteUsers();
    }

    @Delete( ":id")
    deleteUserByID(@Param('id') id): string {
        return this.userService.deleteUserByID(id);
    }
}
