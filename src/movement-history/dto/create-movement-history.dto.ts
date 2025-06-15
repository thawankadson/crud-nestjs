import {IsEnum, IsNotEmpty, IsNumber, IsOptional} from 'class-validator';

export class CreateMovementHistoryDto {
    @IsNumber()
    @IsNotEmpty()
    productId: number;

    @IsEnum(['entrada', 'saida', 'criado', 'atualizado', 'deletado'])
    type: 'entrada' | 'saida' | 'criado' | 'atualizado' | 'deletado';

    @IsNumber()
    @IsOptional()
    quantity?: number;
}
