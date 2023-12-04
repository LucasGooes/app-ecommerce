"use client";
import { useEffect, useState } from "react";
import "../../../global/styles/reset.css";
import "../../../global/styles/style.css";
import { Categoria } from '@/types/Categoria';
import { Produto } from '@/types/Produto';

export default function ProdutosPorCategoria({ params }: { params: { id: string, descricao: string } }) {
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
      const response = await fetch(`http://127.0.0.1:8080/produto/buscar/categoria/${params.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
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
              /></a>

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
              <a className="header-actions__shortcut" href="mailto:sac@email.com.br?subject=Atendimento e-commerce&body=Olá, venho do e-commerce e preciso de ajudar com o seguinte problema:">
                <span className="material-symbols-outlined"> support_agent </span>
                <span>Atendimento</span>
              </a>
              <button
                id="minicartIcon"
                title="minicart"
                className="header-actions__minicart"
              >
                <span id="minicartQtt" className="cart-qtt">0</span>
                <span className="material-symbols-outlined"> shopping_cart </span>
              </button>
            </div>
          </div>
        </div>
        <div className="header-menu">
          <nav className="header-menu__inner container">
            <ul className="header-menu__inner__list">
              {categorias.content.map((categoria) => (
                <>
                  <li className="header-menu__inner__list__item">
                    <a href="templates/plp.html" className="header-menu__inner__list__item__link"
                    >{categoria.descricao}</a>
                  </li>
                </>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="plp-container container" style={{ width: "100%" }}>
        <div className="bread-crumb-row">
          <div className="bread-crumb-container">
            <span className="home"><a href="/templates/index.html">Home</a></span
            ><span
            ><span className="material-symbols-outlined">
                chevron_right
              </span></span><span className="term">Categoria</span>
          </div>
        </div>

        <div className="filters-and-order-by">
          <form className="filters-and-order-by__box">
            <label htmlFor="category">Categoria:</label
            ><select name="category" id="category">
              <option value="category1">Categoria</option>
              <option value="category2">Categoria2</option>
            </select>
          </form>

          <form className="filters-and-order-by__box">
            <label htmlFor="OrderBy">Ordenar por:</label
            ><select name="OrderBy" id="OrderBy">
              <option value="category1">Nome</option>
              <option value="category2">Preço</option>
            </select>
          </form>
        </div>

        <section className="result-list">
          {produtos.content.map((produto) => (
            <>
              <div className="product-card">
                <a className="product-card__link" href={`/produto/${produto.id}`}></a>
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
                  <span className="product-card__content__price">{'R$' + produto.preco}</span>
                  <a className="cta product-card__content__buy-button" href="/templates/pdp.html"
                  >CTA</a
                  >
                </div>
              </div>
            </>
          ))}
        </section>
      </main>

      <footer className="footer-container">
        <div className="footer-main-content">
          <div className="footer-main-content container">
            <div className="footer-main-content__about-box">
              <img
                src="https://fakeimg.pl/120x70/"
                alt=""
                className="footer-main-content__about-box__logo"
              />
              <p className="footer-main-content__about-box__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium non purus id suscipit.
              </p>
            </div>
            <ul className="footer-menu footer-menu--1">
              <li className="footer-menu__item">Menu</li>
              <li className="footer-menu__item">Menu Item</li>
              <li className="footer-menu__item">Menu Item</li>
              <li className="footer-menu__item">Menu Item</li>
            </ul>

            <ul className="footer-menu footer-menu--2">
              <li className="footer-menu__item">Menu</li>
              <li className="footer-menu__item">Menu Item</li>
              <li className="footer-menu__item">Menu Item</li>
              <li className="footer-menu__item">Menu Item</li>
            </ul>
          </div>
        </div>

        <div className="footer-legal-info">
          <div className="container">
            <p className="footer-legal-info__text">Informação de desenvolvimento</p>
          </div>
        </div>
      </footer>

      <div id="minicartDrawer" className="minicart-drawer dn">
        <div className="minicart-drawer__header">
          <p className="minicart-drawer__header__title">Meu carrinho</p>
          <button id="minicartClose" className="minicart-drawer__header__close">
            <span className="material-symbols-outlined"> close </span>
          </button>
        </div>

        <ul id="minicartList" className="minicart-drawer__product-list">
          <li className="minicart-drawer__product-list__item">
            <img
              className="product-img--medium"
              src="https://fakeimg.pl/100x100/"
              alt=""
            />
            <div className="minicart-drawer__product-list__infos">
              <span className="product-name--2-lines"
              >Nome do produto em até duas linhas</span
              >

              <span className="minicart-drawer__product-list__infos__price"
              >R$ 000,00</span
              >
            </div>

            <div className="minicart-drawer__product-list__actions">
              <button className="action-remove">
                <span className="material-symbols-outlined"> delete </span>
              </button>

              <div className="qtt-input">
                <button id="minusc">
                  <span className="material-symbols-outlined"> remove </span>
                </button>
                <input type="number" value="1" id="inputc" minLength="1" />
                <button id="plusc">
                  <span className="material-symbols-outlined"> add </span>
                </button>
              </div>
            </div>
          </li>
        </ul>

        <div className="minicart-drawer__footer">
          <div className="minicart-drawer__footer__total">
            <span className="minicart-drawer__footer__total">Total:</span>
            <span className="minicart-drawer__footer__total">R$ 000,00</span>
          </div>

          <p className="minicart-drawer__footer__info">
            Entrega e taxas serão calculadas no checkout
          </p>

          <a className="minicart-drawer__footer__cta1 cta" href="/templates/checkout/cart.html"
          >Finalizar pedido</a
          >
          <button
            id="minicartCloseButton"
            className="minicart-drawer__footer__cta2 cta cta2"
          >
            <span className="material-symbols-outlined"> arrow_back </span> Continuar
            comprando
          </button>
        </div>
      </div>

      <div id="bgLock" className="bg-lock dn"></div>
    </>
  )

}