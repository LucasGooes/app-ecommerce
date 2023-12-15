import { Carrinho } from "./Carrinho";
import { Endereco } from "./Endereco";
import { Pagamento } from "./Pagamento";

export interface Pedido {
  nomeCliente: string;
  emailCliente: string;
  telefoneCliente: string;
  endereco: Endereco;
  pagamento: Pagamento;
  carrinho: Carrinho;
}
