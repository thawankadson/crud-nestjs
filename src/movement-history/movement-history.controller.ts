import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovementHistoryService } from './movement-history.service';
import { CreateMovementHistoryDto } from './dto/create-movement-history.dto';
import { UpdateMovementHistoryDto } from './dto/update-movement-history.dto';

@Controller('movement-history')
export class MovementHistoryController {
  constructor(private readonly movementHistoryService: MovementHistoryService) {}

  @Post()
  create(@Body() createMovementHistoryDto: CreateMovementHistoryDto) {
    return this.movementHistoryService.create(createMovementHistoryDto);
  }

  @Get()
  findAll() {
    return this.movementHistoryService.findAll();
  }

  @Get('product/:id')
  findByProductId(@Param('id') id: string) {
    return this.movementHistoryService.findByProductId(+id);
  }
}
