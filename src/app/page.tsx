"use client";

import { Produto } from "@/types/Produto";
import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState<{ content: Produto[] }>({
    content: [],
  });

  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await fetch("http://127.0.0.1:8080/produto/pagina", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.log("Não foi possivel carregar os produtos");
        return;
      }
      const dados = (await response.json()) as { content: Produto[] };
      setProdutos(dados);
    };
    buscarProdutos();
  }, []);
  if (produtos.content.length === 0) {
    return <div>Carregando...</div>;
  }
  return (
    <div>
      <ul>
        {produtos.content.map((produto) => (
          <>
            <li>{produto.id}</li>
            <li>{produto.descricao}</li>
            <li>{produto.descricao2}</li>
            <li>{produto.preco}</li>
            <li>{produto.codigo}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
