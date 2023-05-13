import {IOrder} from "../interfaces/order";

export class OrderDto implements IOrder{
    age: string;
    birthDay: string;
    cardNumber: string;
    tourId: string;
    userId: string;
    _id: string
}