import { Injectable } from '@nestjs/common';
import { CreateMovementHistoryDto } from './dto/create-movement-history.dto';
import { UpdateMovementHistoryDto } from './dto/update-movement-history.dto';
import { MovementHistory } from './entities/movement-history.entity';

@Injectable()
export class MovementHistoryService {
  private movementHistorys: MovementHistory[] = [];
  private idCounter = 1;
  create(createMovementHistoryDto: CreateMovementHistoryDto) {
    const movementHistory: MovementHistory = {
      id: this.idCounter++,
      ...createMovementHistoryDto,
      date: new Date(),
    };
    this.movementHistorys.push(movementHistory);
    return movementHistory;
  }

  findAll() {
    return this.movementHistorys;
  }

  findByProductId(productId: number) {
    return this.movementHistorys.filter(movementHistory => movementHistory.productId === productId);
  }
}
