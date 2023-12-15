"use server";

import { Carrinho } from "@/types/Carrinho";
import { Produto } from "@/types/Produto";
import { cookies } from "next/headers";

export const adicionarItemCarrinho = async (produto: Produto) => {
  const carrinhoString = cookies().get("carrinho")?.value;
  console.log(carrinhoString);

  const carrinho = JSON.parse(carrinhoString || "{}") as Carrinho;

  if (!carrinho.itens) {
    carrinho.itens = [];
    cookies().set("carrinho", JSON.stringify(carrinho));
  }

  const item = carrinho.itens.find((item) => item.produto.id === produto.id);

  if (!item) {
    carrinho.itens.push({ produto, quantidade: 1 });
  } else {
    carrinho.itens = carrinho.itens.map((item) =>
      item.produto.id === produto.id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    );
  }

  cookies().set("carrinho", JSON.stringify(carrinho));
};

export const obterItensCarrinho = async () => {
  const carrinhoString = cookies().get("carrinho")?.value;
  const carrinho = JSON.parse(carrinhoString || "{}") as Carrinho;
  return carrinho;
};
