import { Test, TestingModule } from '@nestjs/testing';
import { MovementHistoryService } from './movement-history.service';

describe('MovementHistoryService', () => {
  let service: MovementHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovementHistoryService],
    }).compile();

    service = module.get<MovementHistoryService>(MovementHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
