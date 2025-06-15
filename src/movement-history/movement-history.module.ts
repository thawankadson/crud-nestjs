import { Module } from '@nestjs/common';
import { MovementHistoryService } from './movement-history.service';
import { MovementHistoryController } from './movement-history.controller';

@Module({
  controllers: [MovementHistoryController],
  providers: [MovementHistoryService],
  exports: [MovementHistoryService],
})
export class MovementHistoryModule {}
