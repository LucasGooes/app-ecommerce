"use client";

import { useCarrinhoContext } from "@/contexts/CarrinhoContext";

interface ButtonMiniCartProps {
  abrirMiniCart: () => void;
}
export function ButtonMiniCart({ abrirMiniCart }: ButtonMiniCartProps) {
  const { produtosSelecionados } = useCarrinhoContext();
  return (
    <button
      onClick={abrirMiniCart}
      id="minicartIcon"
      title="minicart"
      className="header-actions__minicart"
    >
      <span id="minicartQtt" className="cart-qtt">
        {produtosSelecionados.length}
      </span>
      <span className="material-symbols-outlined"> shopping_cart </span>
    </button>
  );
}
