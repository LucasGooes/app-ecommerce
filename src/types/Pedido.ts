import { Carrinho } from './Carrinho';
import { Pagamento } from './Pagamento';

export interface Pedido {
  nomeCliente: string;
  emailCliente: string;
  telefoneCliente: string;
  pagamento: Pagamento;
  carrinho: Carrinho;
}