"use client";

import { Footer } from "@/components/footer";
import { HeaderCheckout } from "@/components/header-checkout";
import { ResumoItem } from "@/components/resumo-item";
import { TopBar } from "@/components/topbar";
import { useCarrinhoContext } from "@/contexts/CarrinhoContext";

import Link from "next/link";

import { useForm, zodResolver } from "@mantine/form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import "../../global/styles/reset.css";
import "../../global/styles/style.css";

const pedidoSchema = z
  .object({
    nomeCliente: z.string(),
    emailCliente: z.string().email(),
    telefoneCliente: z.string(),
    cep: z.string(),
    logradouro: z.string(),
    complemento: z.string(),
    bairro: z.string(),
    numero: z.coerce.number(),
    nomeCartao: z.string(),
    numeroCartao: z.string(),
    codigoSeguranca: z.string(),
    dataVencimento: z.string(),
    numeroParcelas: z.coerce.number(),
  })
  .transform(
    ({
      nomeCliente,
      emailCliente,
      telefoneCliente,
      cep,
      logradouro,
      complemento,
      bairro,
      numero,
      numeroCartao,
      codigoSeguranca,
      dataVencimento,
      numeroParcelas,
    }) => {
      const endereco = {
        cep,
        logradouro,
        complemento,
        bairro,
        numero,
      };
      const pagamento = {
        tpoPagamento: 1,
        pagamentoComCartao: {
          numeroCartao,
          codigoSeguranca,
          dataVencimento,
          numeroParcelas,
        },
      };
      return {
        nomeCliente,
        emailCliente,
        telefoneCliente,
        endereco,
        pagamento,
        carrinho: {} as {
          valorTotalPedido: number;
          produtos: {
            id: number;
            codigo: number;
            quantidade: number;
          }[];
        },
      };
    }
  );

export default function CheckoutInfoAndPayment() {
  const { produtosSelecionados, setProdutosSelecionado } = useCarrinhoContext();

  const router = useRouter();

  const form = useForm({
    initialValues: {
      nomeCliente: "",
      emailCliente: "",
      telefoneCliente: "",
      cep: "",
      logradouro: "",
      complemento: "",
      bairro: "",
      numero: "",
      nomeCartao: "",
      numeroCartao: "",
      codigoSeguranca: "",
      dataVencimento: "",
      numeroParcelas: "1",
    },
    validate: zodResolver(pedidoSchema),
  });

  const handleFormSubmit = async (values: typeof form.values) => {
    const pedido = pedidoSchema.parse(values);
    pedido.carrinho = {
      valorTotalPedido: produtosSelecionados.reduce(
        (acc, item) => acc + item.produto.preco * item.quantidade,
        0
      ),
      produtos: produtosSelecionados.map((item) => ({
        id: item.produto.id,
        codigo: item.produto.codigo,
        quantidade: item.quantidade,
      })),
    };

    fetch("http://localhost:8085/pedido/submeter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    })
      .then((response) => {
        if (response.status == 201) {
          console.log("Pedido submetido com sucesso");
          form.reset();
          setProdutosSelecionado([]);
          router.push("/order-placed");
        } else {
          console.log("Erro ao submeter o pedido");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Erro ao submeter o pedido:", error);
      });
  };

  return (
    <>
      <TopBar />
      <HeaderCheckout info />

      <main style={{ width: "100%" }}>
        <form
          onSubmit={form.onSubmit(handleFormSubmit)}
          className="checkout-container container"
        >
          <div className="checkout-form-boxes">
            <div className="checkout-box forms">
              <span className="checkout-form-boxes__title">
                <strong>1</strong> Dados pessoais e entrega
              </span>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="checkoutEmail">
                    Email
                  </label>
                  <input
                    required
                    type="text"
                    id="checkoutEmail"
                    placeholder="email@exemplo.com"
                    {...form.getInputProps("emailCliente")}
                  />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="fullName">
                    Nome Completo
                  </label>
                  <input
                    required
                    type="text"
                    id="fullName"
                    placeholder="Ex.: José da Silva"
                    {...form.getInputProps("nomeCliente")}
                  />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="phone">
                    Celular
                  </label>
                  <input
                    required
                    type="text"
                    id="phone"
                    placeholder="Ex.: (00) 00000-0000"
                    {...form.getInputProps("telefoneCliente")}
                  />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="cep">
                    CEP
                  </label>
                  <input
                    required
                    type="text"
                    name=""
                    id="cep"
                    placeholder="Ex.: 00000-000"
                    {...form.getInputProps("cep")}
                  />
                </div>

                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="adress">
                    Endereço
                  </label>
                  <input
                    required
                    type="text"
                    name=""
                    id="adress"
                    placeholder="Ex.: Rua de exemplo"
                    {...form.getInputProps("logradouro")}
                  />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="adressNumber">
                    Número
                  </label>
                  <input
                    required
                    type="text"
                    name=""
                    id="adressNumber"
                    placeholder="Número"
                    {...form.getInputProps("numero")}
                  />
                </div>

                <div className="checkout-form-boxes__line__input">
                  <label
                    className="checkout-text-1"
                    htmlFor="adressNeighborhood"
                  >
                    Bairro
                  </label>
                  <input
                    required
                    type="text"
                    name=""
                    id="adressNeighborhood"
                    placeholder="Bairro"
                    {...form.getInputProps("bairro")}
                  />
                </div>

                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="adressComplement">
                    Complemento
                  </label>
                  <input
                    required
                    type="text"
                    name=""
                    id="adressComplement"
                    placeholder="Ex.: Ap 14"
                    {...form.getInputProps("complemento")}
                  />
                </div>
              </div>
            </div>

            <div className="checkout-box forms">
              <span className="checkout-form-boxes__title">
                <strong>2</strong> Pagamento
              </span>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="cardNumber">
                    Número do cartão
                  </label>
                  <input
                    required
                    type="number"
                    name=""
                    id="cardNumber"
                    placeholder="Ex.: 0000 0000 0000 0000"
                    {...form.getInputProps("numeroCartao")}
                  />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="cardHolder">
                    Nome do proprietário (como impresso no cartão)
                  </label>
                  <input
                    required
                    type="text"
                    name=""
                    id="cardHolder"
                    placeholder="Ex.: José da Silva"
                    {...form.getInputProps("nomeCartao")}
                  />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input installments">
                  <label
                    className="checkout-text-1"
                    htmlFor="checkoutInstallments"
                  >
                    Parcelas
                  </label>
                  <select
                    {...form.getInputProps("numeroParcelas")}
                    name="checkoutInstallments"
                    id="checkoutInstallments"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="checkout-form-boxes__line__input expiration-date">
                  <label className="checkout-text-1" htmlFor="expirationDate">
                    Validade
                  </label>
                  <input
                    required
                    type="date"
                    name=""
                    id="expirationDate"
                    {...form.getInputProps("dataVencimento")}
                  />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input cvv">
                  <label className="checkout-text-1" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    required
                    type="number"
                    name=""
                    id="cvv"
                    placeholder="Ex.: 000"
                    {...form.getInputProps("codigoSeguranca")}
                  />
                </div>

                <div className="billingcheckbox">
                  <label
                    className="checkout-text-1 db"
                    htmlFor="sameAdressForBilling"
                  >
                    Usar endereço da entrega como endereço de cobrança
                  </label>
                  <input
                    className="billingcheckbox"
                    type="checkbox"
                    id="sameAdressForBilling"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-box checkout-box--right">
            <div className="summary-product-list">
              <h4 className="checkout-text-1">Resumo</h4>
              <ul className="summary-product-list__list">
                {produtosSelecionados.map((item) => (
                  <ResumoItem content={item} />
                ))}
              </ul>
            </div>

            <div className="input-field-1">
              <label className="checkout-text-1" htmlFor="cupomField">
                Adicionar Cupom:
              </label>
              <div className="input-field-1__coupom">
                <input id="cupomField" type="text" placeholder="CUPOM" />
                <button>Adicionar</button>
              </div>
            </div>

            <div className="detailed-cost">
              <div className="detailed-cost__line">
                <span>Subtotal</span>
                <span>
                  {" "}
                  R$
                  {produtosSelecionados
                    .reduce(
                      (acc, item) => acc + item.produto.preco * item.quantidade,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>

              <div className="detailed-cost__line">
                <span>Frete</span>
                <span> R$000,00</span>
              </div>
            </div>

            <div className="total-cost">
              <span className="checkout-text-1 tb">Total</span>
              <span className="checkout-text-1 tb">
                {" "}
                R$
                {produtosSelecionados
                  .reduce(
                    (acc, item) => acc + item.produto.preco * item.quantidade,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>

            <button type="submit" className="cta checkout">
              Finalizar
            </button>
            <Link className="cta2 checkout" href="/checkout-cart">
              Voltar
            </Link>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
}
