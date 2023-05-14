import { Injectable } from '@nestjs/common';
import {Tour, TourDocument} from "../../shema/tour";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {TourDto} from "../../dto/tour-dto";
import {User} from "../../shema/user";

@Injectable()
export class ToursService {
    private toursCount = 10;
    constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
    }
//динамически генерирует сущности базы данных
    async generateTours(): Promise<any> {
        for (let i = 0; i <= this.toursCount; i++ ){
            const tour = new TourDto('test' + i, 'test desc', 'test operation', '300' + i)
            const tourData = new this.tourModel(tour);
            await tourData.save();
            }
        }

    async deleteTours(): Promise<any>{
        return  this.tourModel.deleteMany({})
        }

    async getAllTours(): Promise<Tour[]> {
        return this.tourModel.find();
    }

    }

