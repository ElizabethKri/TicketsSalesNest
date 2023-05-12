import { Test, TestingModule } from '@nestjs/testing';
import { JwtStategyService } from './jwt-stategy.service';

describe('JwtStategyService', () => {
  let service: JwtStategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtStategyService],
    }).compile();

    service = module.get<JwtStategyService>(JwtStategyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
