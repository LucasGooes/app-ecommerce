"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Minicart from "@/components/minicart";
import { ProdutoItem } from "@/components/produto-item";
import { TopBar } from "@/components/topbar";
import { Categoria } from "@/types/Categoria";
import { Produto } from "@/types/Produto";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../../global/styles/reset.css";
import "../../../global/styles/style.css";

export default function ProdutosPorCategoria({
  params,
}: {
  params: { id: string; descricao: string };
}) {
  const [categorias, setCategorias] = useState<{ content: Categoria[] }>({
    content: [],
  });

  const [produtos, setProdutosDaCategoria] = useState<{ content: Produto[] }>({
    content: [],
  });

  const [aberto, setAberto] = useState<boolean>(false);

  useEffect(() => {
    const listarCategorias = async () => {
      const response = await fetch("http://127.0.0.1:8080/categoria/listar", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        console.log("Não foi possível listar as categorias");
        return;
      }
      const dados = (await response.json()) as { content: Categoria[] };
      setCategorias(dados);
    };

    const buscarProdutosPorCategoria = async () => {
      const response = await fetch(
        `http://127.0.0.1:8080/produto/buscar/categoria/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.log("Não foi possível carregar os produtos da categoria");
        return;
      }
      const dados = (await response.json()) as { content: Produto[] };
      setProdutosDaCategoria(dados);
    };
    listarCategorias();
    buscarProdutosPorCategoria();
  }, []);
  return (
    <>
      <TopBar />
      <Header aberto={aberto} setAberto={setAberto} />

      <main className="plp-container container" style={{ width: "100%" }}>
        <div className="bread-crumb-row">
          <div className="bread-crumb-container">
            <span className="home">
              <Link href="/">Home</Link>
            </span>
            <span>
              <span className="material-symbols-outlined">chevron_right</span>
            </span>
            <span className="term">Categoria</span>
          </div>
        </div>

        <section className="result-list">
          {produtos.content.map((produto) => (
            <ProdutoItem key={produto.id} produto={produto} />
          ))}
        </section>
      </main>

      <Footer />

      <Minicart aberto={aberto} fechar={() => setAberto(false)} />
    </>
  );
}
