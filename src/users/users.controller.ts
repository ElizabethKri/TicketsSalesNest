import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "../services/users/users.service";
import {User} from "../shema/user";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }
    //конфликт с текущим роутером, если используем декоратор @Query
    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }
//применение декоратора Param (param - объект)
    @Get( ":id")
    getUserByID(@Param('id') id): Promise<User> {
        return this.userService.getUserByID(id);
    }

    @Post()
    sendAllUsers(@Body() data): Promise<User> {
        return  this.userService.sendAllUsers(data);
    }

    @Put()
    updateUsers(@Body() data): Promise<User> {
        return this.userService.updateUsers(data);
    }

    @Delete()
    deleteUsers(): Promise<User> {
        return this.userService.deleteUsers();
    }

    @Delete( ":id")
    deleteUserByID(@Param('id') id): Promise<User> {
        return this.userService.deleteUserByID(id);
    }
}
