import { PartialType } from '@nestjs/swagger';
import { CreateMovementHistoryDto } from './create-movement-history.dto';

export class UpdateMovementHistoryDto extends PartialType(CreateMovementHistoryDto) {}
