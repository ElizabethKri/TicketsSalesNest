import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuardService } from './jwt-auth.guard.service';

describe('JwtAuthGuardService', () => {
  let service: JwtAuthGuardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtAuthGuardService],
    }).compile();

    service = module.get<JwtAuthGuardService>(JwtAuthGuardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
