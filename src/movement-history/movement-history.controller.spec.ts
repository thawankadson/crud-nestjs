import { Test, TestingModule } from '@nestjs/testing';
import { MovementHistoryController } from './movement-history.controller';
import { MovementHistoryService } from './movement-history.service';

describe('MovementHistoryController', () => {
  let controller: MovementHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovementHistoryController],
      providers: [MovementHistoryService],
    }).compile();

    controller = module.get<MovementHistoryController>(MovementHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
