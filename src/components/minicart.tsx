"use client";

import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import Link from "next/link";
import { MinicartProductItem } from "./minicart-product-item";

interface MinicartProps {
  aberto: boolean;
  fechar: () => void;
}
export default function Minicart({ aberto, fechar }: MinicartProps) {
  const { produtosSelecionados } = useCarrinhoContext();

  const cls = `minicart-drawer${aberto ? " open" : " dn"}`;
  const clsBglock = `bg-lock${aberto ? " df" : " dn"}`;
  return (
    <>
      <div id="minicartDrawer" className={cls}>
        <div className="minicart-drawer__header">
          <p className="minicart-drawer__header__title">Meu carrinho</p>
          <button
            id="minicartClose"
            className="minicart-drawer__header__close"
            onClick={fechar}
          >
            <span className="material-symbols-outlined"> close </span>
          </button>
        </div>

        <ul id="minicartList" className="minicart-drawer__product-list">
          {produtosSelecionados.map((content) => (
            <MinicartProductItem key={content.produto.id} content={content} />
          ))}
        </ul>

        <div className="minicart-drawer__footer">
          <div className="minicart-drawer__footer__total">
            <span className="minicart-drawer__footer__total">Total:</span>
            <span className="minicart-drawer__footer__total">
              R${" "}
              {produtosSelecionados
                .reduce(
                  (acc, item) => acc + item.produto.preco * item.quantidade,
                  0
                )
                .toFixed(2)}
            </span>
          </div>

          <p className="minicart-drawer__footer__info">
            Entrega e taxas serão calculadas no checkout
          </p>

          <Link
            className="minicart-drawer__footer__cta1 cta"
            href="/checkout-cart"
          >
            Finalizar pedido
          </Link>
          <button
            id="minicartCloseButton"
            className="minicart-drawer__footer__cta2 cta cta2"
            onClick={fechar}
          >
            <span className="material-symbols-outlined"> arrow_back </span>{" "}
            Continuar comprando
          </button>
        </div>
      </div>
      <div id="bgLock" className={clsBglock} onClick={fechar}></div>
    </>
  );
}
