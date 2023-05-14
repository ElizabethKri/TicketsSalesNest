import {Controller, Delete, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ToursService} from "../../services/tours/tours.service";
import {ITour} from "../../interfaces/tour";
import {JwtAuthGuardService} from "../../services/authentication/jwt-auth.guard/jwt-auth.guard.service";

@Controller('tours')
export class ToursController {
    constructor(private toursService:ToursService) {
    }

    //@UseGuards (JwtAuthGuard)
    //генерация тура
    // @Get()
    // getAllTours(): void {
    //     this.toursService.generateTours()
    // }
    //
    // @Get(":remove")
    // removeAllTours(@Param('remove') remove): void{
    //     this.toursService.deleteTours();
    // }

    @Post()
    initTours(): Promise<ITour[]> {
        this.toursService.generateTours(); //метод для записи данных в базу
        return this.toursService.getAllTours(); //вызываем результат из базы
    }

    @Get()
    getAllTours():Promise<ITour[]>{
        return this.toursService.getAllTours();
    }

    @Delete()
    removeAllTours(): void {
        this.toursService.deleteTours();
    }
}
