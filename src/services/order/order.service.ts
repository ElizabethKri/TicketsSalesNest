import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Order, OrderDocument} from "../../shema/order";
import {Model} from "mongoose";
import {OrderDto} from "../../dto/order-dto";

@Injectable()
export class OrderService {
    //инжектирована модель для обращения базы данных
    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    //записывает наш заказ и создает новую запись
    async sendOrder(data: OrderDto): Promise<Order>{
        const orderData = new this.orderModel(data);
        return orderData.save()
    }
}
