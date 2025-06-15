export class MovementHistory {
    id: number;
    productId: number;
    quantity?: number;
    type: 'entrada' | 'saida' | 'criado' | 'atualizado' | 'deletado'
    date: Date;
}
