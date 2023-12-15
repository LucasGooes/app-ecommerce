"use client";

import { Footer } from "@/components/footer";
import { HeaderCheckout } from "@/components/header-checkout";
import { TopBar } from "@/components/topbar";
import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import Link from "next/link";
import "../../global/styles/reset.css";
import "../../global/styles/style.css";

export default function CheckoutCart() {
  const { produtosSelecionados, setProdutosSelecionado } = useCarrinhoContext();
  const handleClickDelete = (content: (typeof produtosSelecionados)[0]) => {
    setProdutosSelecionado((items) =>
      items.filter((item) => item.produto.id !== content.produto.id)
    );
  };

  const handleClickPlus = (content: (typeof produtosSelecionados)[0]) => {
    setProdutosSelecionado((items) => {
      return items.map((item) => {
        if (item.produto.id === content.produto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
    });
  };

  const handleClickMinus = (content: (typeof produtosSelecionados)[0]) => {
    setProdutosSelecionado((items) => {
      return items.map((item) => {
        if (item.produto.id === content.produto.id) {
          return { ...item, quantidade: item.quantidade - 1 };
        }
        return item;
      });
    });
  };
  return (
    <>
      <TopBar />
      <HeaderCheckout />

      <main className="checkout-container container" style={{ width: "100%" }}>
        <div className="checkout-box checkout-box--left">
          <h1 className="checkout-text-1">Seus produtos</h1>
          <ul className="checkout-product-list">
            {produtosSelecionados.map((item, index) => (
              <li className="checkout-product-list__item" key={index}>
                <div className="checkout-img-and-title">
                  <img
                    className="product-img--medium"
                    src={item.produto.srcImagemS}
                    alt=""
                  />

                  <span className="checkout-product-name checkout-text-1">
                    {item.produto.nome}
                  </span>
                </div>

                <div className="qtt-input">
                  <button id="minusa" onClick={() => handleClickMinus(item)}>
                    <span className="material-symbols-outlined"> remove </span>
                  </button>
                  <input
                    type="number"
                    value={item.quantidade}
                    id="inputa"
                    minLength={1}
                  />
                  <button id="plusa" onClick={() => handleClickPlus(item)}>
                    <span className="material-symbols-outlined"> add </span>
                  </button>
                </div>

                <span className="checkout-box--left price">
                  R$ {(item.produto.preco * item.quantidade).toFixed(2)}
                </span>

                <button
                  className="action-remove"
                  onClick={() => handleClickDelete(item)}
                >
                  <span className="material-symbols-outlined"> delete </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="checkout-box checkout-box--right">
          <div className="input-field-1">
            <label className="checkout-text-1" htmlFor="cupomField">
              Adicionar Cupom:
            </label>
            <form className="input-field-1__coupom">
              <input id="cupomField" type="text" placeholder="CUPOM" />
              <button>Adicionar</button>
            </form>
          </div>

          <div className="input-field-1">
            <label className="checkout-text-1" htmlFor="shippingField">
              Calcular o frete:
            </label>
            <form className="input-field-1__shipping">
              <input id="shippingField" type="text" placeholder="CEP" />
              <button>Calcular</button>
            </form>
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
              R${" "}
              {produtosSelecionados
                .reduce(
                  (acc, item) => acc + item.produto.preco * item.quantidade,
                  0
                )
                .toFixed(2)}
            </span>
          </div>

          <Link className="cta checkout" href="/checkout-info-and-payment">
            Continuar
          </Link>
          <Link className="cta2 checkout" href="/">
            Adicionar outros produtos
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
