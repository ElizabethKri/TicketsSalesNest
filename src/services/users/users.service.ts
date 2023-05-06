import {Delete, Get, Injectable, Param, Post, Put} from '@nestjs/common';
import {User, UserDocument} from "../../shema/user";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
@Injectable()
export class UsersService {
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
        const userData = new this.userModel(data)
        return userData.save();
    }

    async updateUsers(id:string): Promise<User> {
        return this.userModel.findByIdAndUpdate(id);
    }

    async deleteUsers(): Promise<User> {
        return this.userModel.findByIdAndDelete();
    }

    async deleteUserByID(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id);
    }
}
