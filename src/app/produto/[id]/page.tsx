"use client";
import { CategoriaComponent } from "@/components/categoria";
import { Footer } from "@/components/footer";
import Minicart from "@/components/minicart";
import { Categoria } from "@/types/Categoria";
import { Produto } from "@/types/Produto";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import img from "../../../global/img/imagem-teste.png";
import "../../../global/styles/reset.css";
import "../../../global/styles/style.css";

export default function Produto({ params }: { params: { id: string } }) {
  const [produto, setProduto] = useState<Produto | null>(null);

  const [categorias, setCategorias] = useState<{ content: Categoria[] }>({
    content: [],
  });

  useEffect(() => {
    const buscarProdutoPorId = async () => {
      const response = await fetch(
        `http://127.0.0.1:8080/produto/buscar/${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        console.log("Não foi possivel carregar os produtos");
        return;
      }
      const produto = (await response.json()) as Produto;
      setProduto(produto);
    };

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
    listarCategorias();
    buscarProdutoPorId();
  }, []);
  return (
    <>
      <div className="top-bar">
        <ul className="top-bar__text-list container">
          <Slider {...}>
            <li className="top-bar__text-list__item">
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li className="top-bar__text-list__item">
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li className="top-bar__text-list__item">
              <span>Lorem ipsum dolor sit amet</span>
            </li>
          </Slider>
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

      <main className="pdp-container container" style={{ width: "100%" }}>
        <div className="pdp-main-content">
          <img className="pdp-main-content__img" src={img} alt="" />
          <aside className="pdp-main-content__info-area">
            <div className="pdp-main-content__info-area__named-id">
              <h1 className="pdp-main-content__title">{produto?.nome}</h1>

              <span className="pdp-main-content__id">
                {"Ref." + produto?.codigo}
              </span>
            </div>

            <div className="pdp-main-content__info-area__small">
              <div className="pdp-main-content__desc">
                <p className="pdp-main-content__desc__text">
                  Descrição rápida do produto com limite de tamanho...
                </p>
                <a className="pdp-main-content__see-more" href="#pdpMore">
                  Ver mais
                </a>
              </div>

              <span className="pdp-main-content__price">
                {"R$ " + produto?.preco}
              </span>
              <form className="pdp-main-content__buy-area">
                <div className="qtt-input">
                  <button id="minus">
                    <span className="material-symbols-outlined"> remove </span>
                  </button>
                  <input type="number" value="1" id="input" minLength={1} />
                  <button id="plus">
                    <span className="material-symbols-outlined"> add </span>
                  </button>
                </div>
                <button className="pdp-main-content__buy-button cta">
                  CTA
                </button>
              </form>
            </div>
          </aside>
        </div>

        <section id="pdpMore" className="pdp-details-area">
          <h3>Descrição</h3>
          <p>{produto?.descricao}</p>
        </section>

        <section className="pdp-details-area">
          <h3>Dados técnicos</h3>
          <p>{produto?.descricao2}</p>
        </section>

        <section>
          <img src="https://fakeimg.pl/1172x360/" alt="" />
        </section>

        <section className="shelf-container">
          <h3 className="shelf_title title">Title</h3>
          <ul className="shelf__list shelf__list-1">
            <li className="shelf__list__item">
              <div className="product-card">
                <a
                  className="product-card__link"
                  href="/templates/index.html"
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
                    product name (max 2 lines)
                  </h4>
                  <span className="product-card__content__price">
                    R$ 000,00
                  </span>
                  <button className="cta product-card__content__buy-button">
                    CTA
                  </button>
                </div>
              </div>
            </li>
            <li className="shelf__list__item">
              <div className="product-card">
                <a
                  className="product-card__link"
                  href="/templates/index.html"
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
                    product name (max 2 lines)
                  </h4>
                  <span className="product-card__content__price">
                    R$ 000,00
                  </span>
                  <button className="cta product-card__content__buy-button">
                    CTA
                  </button>
                </div>
              </div>
            </li>
            <li className="shelf__list__item">
              <div className="product-card">
                <a
                  className="product-card__link"
                  href="/templates/index.html"
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
                    product name (max 2 lines)
                  </h4>
                  <span className="product-card__content__price">
                    R$ 000,00
                  </span>
                  <button className="cta product-card__content__buy-button">
                    CTA
                  </button>
                </div>
              </div>
            </li>
            <li className="shelf__list__item">
              <div className="product-card">
                <a
                  className="product-card__link"
                  href="/templates/index.html"
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
                    product name (max 2 lines)
                  </h4>
                  <span className="product-card__content__price">
                    R$ 000,00
                  </span>
                  <button className="cta product-card__content__buy-button">
                    CTA
                  </button>
                </div>
              </div>
            </li>
            <li className="shelf__list__item">
              <div className="product-card">
                <a
                  className="product-card__link"
                  href="/templates/index.html"
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
                    product name (max 2 lines)
                  </h4>
                  <span className="product-card__content__price">
                    R$ 000,00
                  </span>
                  <button className="cta product-card__content__buy-button">
                    CTA
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <Footer />

      <Minicart />

      <div id="bgLock" className="bg-lock dn"></div>
    </>
  );
}
