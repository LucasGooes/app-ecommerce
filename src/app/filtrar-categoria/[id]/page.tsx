"use client";
import { CategoriaComponent } from "@/components/categoria";
import { Footer } from "@/components/footer";
import Minicart from "@/components/minicart";
import { Categoria } from "@/types/Categoria";
import { Produto } from "@/types/Produto";
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
      <div className="top-bar">
        <ul className="top-bar__text-list container">
          <li className="top-bar__text-list__item">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        </ul>
      </div>
      <header className="header-container sticky0">
        <div className="header-main-content">
          <div className="header-main-content__inner-container container">
            <a href="/templates/index.html">
              <img
                className="header-main-content__inner-container__logo"
                src="https://fakeimg.pl/120x70/"
                alt=""
              />
            </a>

            <search className="search-bar">
              <form className="search-bar-inner">
                <input
                  className="search-bar__input-box"
                  type="text"
                  id="search"
                  name="busca"
                  placeholder="O que você procura?"
                />
                <button className="search-bar__submit-button" type="submit">
                  <span className="material-symbols-outlined"> search </span>
                </button>
              </form>
            </search>

            <div className="header-actions">
              <a
                className="header-actions__shortcut"
                href="mailto:sac@email.com.br?subject=Atendimento e-commerce&body=Olá, venho do e-commerce e preciso de ajudar com o seguinte problema:"
              >
                <span className="material-symbols-outlined">
                  {" "}
                  support_agent{" "}
                </span>
                <span>Atendimento</span>
              </a>
              <button
                id="minicartIcon"
                title="minicart"
                className="header-actions__minicart"
              >
                <span id="minicartQtt" className="cart-qtt">
                  0
                </span>
                <span className="material-symbols-outlined">
                  {" "}
                  shopping_cart{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="header-menu">
          <nav className="header-menu__inner container">
            <ul className="header-menu__inner__list">
              {categorias.content.map((categoria) => (
                <>
                  <CategoriaComponent categoria={categoria} />
                </>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="plp-container container" style={{ width: "100%" }}>
        <div className="bread-crumb-row">
          <div className="bread-crumb-container">
            <span className="home">
              <a href="/templates/index.html">Home</a>
            </span>
            <span>
              <span className="material-symbols-outlined">chevron_right</span>
            </span>
            <span className="term">Categoria</span>
          </div>
        </div>

        <div className="filters-and-order-by">
          <form className="filters-and-order-by__box">
            <label htmlFor="category">Categoria:</label>
            <select name="category" id="category">
              <option value="category1">Categoria</option>
              <option value="category2">Categoria2</option>
            </select>
          </form>

          <form className="filters-and-order-by__box">
            <label htmlFor="OrderBy">Ordenar por:</label>
            <select name="OrderBy" id="OrderBy">
              <option value="category1">Nome</option>
              <option value="category2">Preço</option>
            </select>
          </form>
        </div>

        <section className="result-list">
          {produtos.content.map((produto) => (
            <>
              <div className="product-card">
                <a
                  className="product-card__link"
                  href={`/produto/${produto.id}`}
                ></a>
                <div className="product-card__image">
                  <img
                    src="https://fakeimg.pl/227x227/"
                    alt=""
                    className="product-card__image__image"
                  />
                </div>
                <div className="product-card__content">
                  <h4 className="product-card__content__title">
                    {produto.nome}
                  </h4>
                  <span className="product-card__content__price">
                    {"R$" + produto.preco}
                  </span>
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >
                    CTA
                  </a>
                </div>
              </div>
            </>
          ))}
        </section>
      </main>

      <Footer />

      <Minicart />

      <div id="bgLock" className="bg-lock dn"></div>
    </>
  );
}
