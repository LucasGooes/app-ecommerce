import { Produto } from "./Produto";

export interface Carrinho {
  valorTotalPedido: number;
  itens: { produto: Produto; quantidade: number }[];
}
