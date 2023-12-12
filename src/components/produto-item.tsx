"use client";
import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import { Produto } from "@/types/Produto";
import Link from "next/link";

interface ProdutoItemProps {
  produto: Produto;
}
export function ProdutoItem({ produto }: ProdutoItemProps) {
  const { setProdutosSelecionado } = useCarrinhoContext();

  const adicionarItemNoCarrinho = () => {
    setProdutosSelecionado((items) => [...items, { produto, quantidade: 1 }]);
  };
  return (
    <li className="shelf__list__item" id={produto.id.toString()}>
      <div className="product-card">
        <Link
          className="product-card__link"
          href={`/produto/${produto.id}`}
        ></Link>
        <div className="product-card__image">
          <img
            src="https://fakeimg.pl/227x227/"
            alt=""
            className="product-card__image__image"
          />
        </div>
        <div className="product-card__content">
          <h4 className="product-card__content__title">{produto.nome}</h4>
          <span className="product-card__content__price">
            {"R$ " + produto.preco}{" "}
          </span>
          <button
            onClick={adicionarItemNoCarrinho}
            className="cta product-card__content__buy-button"
          >
            CTA
          </button>
        </div>
      </div>
    </li>
  );
}
