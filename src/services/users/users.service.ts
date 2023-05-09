import {Delete, Get, Injectable, Param, Post, Put} from '@nestjs/common';
import {User, UserDocument} from "../../shema/user";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
@Injectable()
export class UsersService {
    //инжектирована модель
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>)  {
        console.log('userService run')
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    async getUserByID(id):  Promise<User>{
        return this.userModel.findById(id);
    }

    async sendAllUsers(data): Promise<User> {
        //создаем новую запись и передаем параметры, которые получим от клиента
        const userData = new this.userModel(data)
        //сохранение вставки в таблицу
        return userData.save();
    }

    async updateUsers(id:string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }

    async deleteUsers(): Promise<User> {
        return this.userModel.findByIdAndDelete();
    }

    async deleteUserByID(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id);
    }

    async checkAuthUser(login: string, psw: string): Promise<User[]> {
        return this.userModel.find({login: login, psw: psw});
    }

    async checkRegUser(login: string): Promise<User[]> {
        return this.userModel.find({login: login});
    }
}
