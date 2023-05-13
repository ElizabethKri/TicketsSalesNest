import {Body, Controller, Post} from '@nestjs/common';
import {OrderService} from "../../services/order/order.service";
import {OrderDto} from "../../dto/order-dto";

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Post()
    initTours(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
        this.orderService.sendOrder(orderData)
    }
}
