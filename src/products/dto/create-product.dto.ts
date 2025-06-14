/* eslint-disable prettier/prettier */

export class CreateProductDto {
  nome: string;
  lote: string;
  validade: Date;
  quantidade: number;
  preco?: number;
  fabricante?: string;
}
