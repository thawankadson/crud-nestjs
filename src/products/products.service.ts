/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { dot } from 'node:test/reporters';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  private idCounter = 1;
  create(createProductDto: CreateProductDto) {
    const product: Product = {
      id: this.idCounter++,
      ...createProductDto,
    };
    this.products.push(product)
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find(p=> p.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) return null;

    Object.assign(product, updateProductDto);
    return product;
  }

  remove(id: number) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;
    return this.products.splice(index, 1);
  }

  decrementaEstoque(id: number, quantidade: number) {
    const product = this.findOne(id);
    if (!product) return null;

    product.quantidade += quantidade;
    return product;
}
incrementaEstoque(id: number, quantidade: number) {
  const medicamento = this.findOne(id);
  if (!medicamento) return null;

  medicamento.quantidade += quantidade;
  return medicamento;
}
}