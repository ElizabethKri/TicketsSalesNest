import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';
import {UsersService} from "./services/users/users.service";

@Controller()
export class AppController {
  constructor(private usS:UsersService) {
    this.usS.getUserByID('id')
  }

  @Get()
  getHello(): string {
    return "hi";
  }

  @Post()
  sendAll(): string {
    return "post data";
  }

  @Put()
  update(): string {
    return "put data";
  }

  @Delete()
  delete(): string {
    return "delete data";
  }
}
