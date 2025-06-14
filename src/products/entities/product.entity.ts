/* eslint-disable prettier/prettier */
export class Product {
  id: number;
  nome: string;
  lote: string;
  validade: Date;
  quantidade: number;
  preco?: number;
  fabricante?: string;
}
