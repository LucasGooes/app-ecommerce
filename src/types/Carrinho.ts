import { Produto } from './Produto';

export interface Carrinho {
  valorTotalPedido: number;
  produtos: Produto[];
}