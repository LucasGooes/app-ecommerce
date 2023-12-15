"use client";
import { adicionarItemCarrinho } from "@/actions/carrinho";
import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import { Produto } from "@/types/Produto";
import Image from "next/image";
import Link from "next/link";

interface ProdutoItemProps {
  produto: Produto;
}
export function ProdutoItem({ produto }: ProdutoItemProps) {
  const { setProdutosSelecionado } = useCarrinhoContext();

  const handleClickAdd = async () => {
    await adicionarItemCarrinho(produto);
  };

  console.log("Renderizou ProdutoItem: ", produto);

  return (
    <li className="shelf__list__item" id={produto.id.toString()}>
      <div className="product-card">
        <Link
          className="product-card__link"
          href={`/produto/${produto.id}`}
        ></Link>
        <div className="product-card__image">
          <Image
            src={produto.srcImagem || "https://fakeimg.pl/227x227/"}
            alt=""
            width={227}
            height={227}
            className="product-card__image__image"
          />
        </div>
        <div className="product-card__content">
          <h4 className="product-card__content__title">{produto.nome}</h4>
          <span className="product-card__content__price">
            {"R$ " + produto.preco}{" "}
          </span>
          <button
            onClick={handleClickAdd}
            className="cta product-card__content__buy-button"
          >
            CTA
          </button>
        </div>
      </div>
    </li>
  );
}
