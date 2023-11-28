"use client";

import { Produto } from '@/types/Produto';
import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await fetch(
        'http://localhost:8080/produto/pagina'
      );
      if (!response.ok) {
        console.log("Não foi possivel carregar os produtos");
        return;
      }
      const dados = (await response.json()) as Produto[];
      setProdutos(dados);
    };
    buscarProdutos();
  }, []);

  return (
    <div>
      <ul>
        {produtos.map((produto) => (
           <li>{produto.id}</li>
           <li>{produto.descricao}</li>
           <li>{produto.descricao2}</li>
           <li>{produto.preco}</li>
           <li>{produto.codigo}</li>
        ))}
      </ul>

    </div>

  );
}


