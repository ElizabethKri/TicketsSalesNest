import { Injectable } from '@nestjs/common';
import {Tour, TourDocument} from "../../shema/tour";
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {TourDto} from "../../dto/tour-dto";
import {User} from "../../shema/user";
import {ITour, ITourClient} from "../../interfaces/tour";

@Injectable()
export class ToursService {
    private toursCount = 10;
    constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {
    }
//динамически генерирует сущности базы данных
    async generateTours(): Promise<ITour[]> {
        for (let i = 0; i <= this.toursCount; i++ ){
            const tour = new TourDto('test' + i, 'test desc', 'test operation', '300' + i, 'test img')
            const tourData = new this.tourModel(tour);
            await tourData.save();
            }
        return this.getAllTours()
        }

    async deleteTours(): Promise<any>{
        return  this.tourModel.deleteMany({})
        }

    async getAllTours(): Promise<Tour[]> {
        return this.tourModel.find();
    }

    async uploadTour(body: ITourClient){
        const tour = new TourDto(body.name, body.description, body.tourOperator, body.price, body.img)
        const tourData = new this.tourModel(tour);
        await tourData.save();
    }

    async getTourById(id): Promise<ITour> {
        return this.tourModel.findById(id);
    }

    }

