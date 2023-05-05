import {Delete, Get, Injectable, Param, Post, Put} from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor() {
        console.log('userService run')
    }

    getAllUsers(): string {
        return "service all users";
    }

    getUserByID(@Param() param): string {
        return "service user id is " + param.id;
    }

    sendAllUsers(): string {
        return "service user post data";
    }

    updateUsers(): string {
        return "service user put data";
    }

    deleteUsers(): string {
        return "service user delete data";
    }

    deleteUserByID(id: string): string {
        return "service user delete is " + id;
    }
}
