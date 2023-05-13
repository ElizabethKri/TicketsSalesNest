import {Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ToursService} from "../../services/tours/tours.service";

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
    initTours(): void {
        this.toursService.generateTours();
    }

    @Delete()
    removeAllTours(): void {
        this.toursService.deleteTours();
    }
}
