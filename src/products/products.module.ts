import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MovementHistoryModule } from 'src/movement-history/movement-history.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [MovementHistoryModule, ProductsModule],
})
export class ProductsModule {}
