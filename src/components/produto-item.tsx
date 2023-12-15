"use client";
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
    // verificar se o id ja existe no array para atualizar a quantidade
    setProdutosSelecionado((items) => {
      const item = items.find((item) => item.produto.id === produto.id);
      if (item) {
        return items.map((item) => {
          if (item.produto.id === produto.id) {
            return { ...item, quantidade: item.quantidade + 1 };
          }
          return item;
        });
      }
      return [...items, { produto, quantidade: 1 }];
    });
  };

  return (
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
  );
}
