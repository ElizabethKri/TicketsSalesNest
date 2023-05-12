import {ITour} from "../interfaces/tour";

export class TourDto implements ITour {
    name: string;
    description: string;
    tourOperator: string;
    price: string;
    img: string;
    id: string;
    type: string;
    date: string

    constructor(name, description, tourOperator, price){
        this.name = name;
        this.description = description;
        this.tourOperator = tourOperator;
        this.price = price;
    }
}

