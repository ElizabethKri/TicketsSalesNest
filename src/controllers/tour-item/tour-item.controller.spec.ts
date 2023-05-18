import { Test, TestingModule } from '@nestjs/testing';
import { TourItemController } from './tour-item.controller';

describe('TourItemController', () => {
  let controller: TourItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourItemController],
    }).compile();

    controller = module.get<TourItemController>(TourItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
