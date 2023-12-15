"use client";

import { Footer } from "@/components/footer";
import { HeaderCheckout } from "@/components/header-checkout";
import { ResumoItem } from "@/components/resumo-item";
import { TopBar } from "@/components/topbar";
import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import Link from "next/link";
import { useState } from "react";
import "../../global/styles/reset.css";
import "../../global/styles/style.css";

export default function CheckoutInfoAndPayment() {
  const [pedido, setPedido] = useState("");
  const { produtosSelecionados } = useCarrinhoContext();

  const submeterPedido = () => {
    fetch("http://localhost:8085/pedido/submeter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((response) => response.json());
  };

  const handleSubmit = () => {
    submeterPedido();
  };

  return (
    <>
      <TopBar />
      <HeaderCheckout />

      <main style={{ width: "100%" }}>
        <form onSubmit={handleSubmit} className="checkout-container container">
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
                    name=""
                    id="checkoutEmail"
                    placeholder="email@exemplo.com"
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
                    name=""
                    id="fullName"
                    placeholder="Ex.: José da Silva"
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
                    name=""
                    id="phone"
                    placeholder="Ex.: (00) 00000-0000"
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
                  <select name="checkoutInstallments" id="checkoutInstallments">
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
                  <input required type="date" name="" id="expirationDate" />
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
