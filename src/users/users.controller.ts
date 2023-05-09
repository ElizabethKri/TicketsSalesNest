import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "../services/users/users.service";
import {User} from "../shema/user";
import {UserDto} from "../dto/user-dto";
import RejectedValue = jest.RejectedValue;

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
    sendUser(@Body() data: UserDto): Promise<User> {

        return this.userService.checkRegUser(data.login).then((queryRes) => {
            console.log('data reg', queryRes)
            if (queryRes.length === 0) {
                return this.userService.sendUser(data);
            } else {
                console.log('err - user is exists')
                return Promise.reject();
            }
        });

    }

    @Post(":login")
    authUser(@Body() data: UserDto, @Param('login') login): Promise<User | boolean>  {
        return this.userService.checkAuthUser(data.login, data.psw).then((queryRes) => {
            if (queryRes.length !== 0) {
                return Promise.resolve(true);
            } else {
                console.log('err - user is exists')
                return Promise.reject();
            }
        });

    }

    @Put(":id")
    updateUsers(@Param("id") id, @Body() data): Promise<User> {
        return this.userService.updateUsers(id, data);
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
