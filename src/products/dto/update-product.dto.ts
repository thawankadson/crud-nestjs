/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  // Herda todos os campos do CreateProductDto, mas todos opcionais
  // Você pode adicionar campos específicos para update se necessário
}
