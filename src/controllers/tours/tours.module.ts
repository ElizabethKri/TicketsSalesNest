import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';

@Module({
  controllers: [ToursController]
})
export class ToursModule {}
