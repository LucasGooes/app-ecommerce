"use client";

import "../global/styles/reset.css";
import "../global/styles/style.css";
//import "../global/js/base-script.js";
import Link from "next/link";

import * as React from "react";
import { useEffect, useState } from "react";
import { Produto } from "@/types/Produto";
import { Categoria } from '@/types/Categoria';

export default function Home() {
  const [produtos, setProdutos] = useState<{ content: Produto[] }>({
    content: [],
  });

  const [categorias, setCategorias] = useState<{ content: Categoria[] }>({
    content: [],
  });
  /*
    const [value, setValue] = React.useState("");
  
    const handleSubmit = () => {
      if (value.length > 0) {
        const response = fetch(`http://127.0.0.1:8080/produto/buscar?nome=${value}`, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((r) => {
          setValue("");
          if (!r.ok) {
            console.log("Não foi possivel carregar os produtos");
            throw new Error("erro na requisição");
          }
          setProdutos(r.json());
        }).catch((e: Error) => console.log("error", e.message));;
      }
    };
    */

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

    const listarPaginaProdutos = async () => {
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
    listarCategorias();
    listarPaginaProdutos();
  }, []);
  if (produtos.content.length === 0) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <div className="top-bar">
        <ul className="top-bar__text-list container">
          <li className="top-bar__text-list__item" id="1">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item" id="2">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item" id="3">
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
              <div className="search-bar-inner">
                <input
                  className="search-bar__input-box"
                  type="text"
                  id=""
                  name="busca"
                  placeholder="O que você procura?"
                /*
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                */
                />
                <button className="search-bar__submit-button" type="submit">
                  <span className="material-symbols-outlined"> search </span>
                </button>
              </div>
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
                  <li className="header-menu__inner__list__item" id={categoria.codigo}>
                    <a href={`/filtrar-categoria/${categoria.codigo}?descricao=${categoria.descricao}`} className="header-menu__inner__list__item__link"
                    >{categoria.descricao}</a>
                  </li>
                </>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="home-container container" style={{ width: '100%' }}>
        <section className="banner-slider" style={{ width: '100%' }}>
          <ul className="banner-slider__list" style={{ width: '100%' }}>
            <li className="banner-slider__list__item">
              <img
                className="banner-slider__list__item__img"
                src="https://fakeimg.pl/1172x364/"
                alt=""
              />
            </li>
            <li className="banner-slider__list__item">
              <img
                className="banner-slider__list__item__img"
                src="https://fakeimg.pl/1172x364/"
                alt=""
              />
            </li>
            <li className="banner-slider__list__item">
              <img
                className="banner-slider__list__item__img"
                src="https://fakeimg.pl/1172x364/"
                alt=""
              />
            </li>
            <li className="banner-slider__list__item">
              <img
                className="banner-slider__list__item__img"
                src="https://fakeimg.pl/1172x364/"
                alt=""
              />
            </li>
          </ul>
        </section>

        <section className="tip-bar-container">
          <ul className="tip-bar__list">
            <li className="tip-bar__list__item">
              <img src="https://fakeimg.pl/48x48/" alt="" />
              <span>Label em duas linhas</span>
            </li>
            <li className="tip-bar__list__item">
              <img src="https://fakeimg.pl/48x48/" alt="" />
              <span>Label em duas linhas</span>
            </li>
            <li className="tip-bar__list__item">
              <img src="https://fakeimg.pl/48x48/" alt="" />
              <span>Label em duas linhas</span>
            </li>
            <li className="tip-bar__list__item">
              <img src="https://fakeimg.pl/48x48/" alt="" />
              <span>Label em duas linhas</span>
            </li>
            <li className="tip-bar__list__item">
              <img src="https://fakeimg.pl/48x48/" alt="" />
              <span>Label em duas linhas</span>
            </li>
          </ul>
        </section>

        <section className="banner-group-container">
          <ul className="banner-group__list">
            <li className="banner-group__list__item">
              <img src="https://fakeimg.pl/232x360/" alt="" />
            </li>
            <li className="banner-group__list__item">
              <img src="https://fakeimg.pl/232x360/" alt="" />
            </li>
            <li className="banner-group__list__item">
              <img src="https://fakeimg.pl/232x360/" alt="" />
            </li>
            <li className="banner-group__list__item">
              <img src="https://fakeimg.pl/232x360/" alt="" />
            </li>
          </ul>
        </section>

        <section className="shelf-container">
          <h3 className="shelf_title title">Title</h3>
          <ul className="shelf__list shelf__list-1">
            {produtos.content.map((produto) => (
              <>
                <li className="shelf__list__item" id={produto.id}>
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
                      <span className="product-card__content__price">{'R$ ' + produto.preco} </span>
                      <a
                        className="cta product-card__content__buy-button"
                        href="/adicionar/aocarrinho"
                      >CTA</a
                      >
                    </div>
                  </div>
                </li>
              </>
            ))}
            <li className="shelf__list__item">
              <div className="product-card">
                <a className="product-card__link" href="/templates/index.html"></a>
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
                  <span className="product-card__content__price">R$ 000,00</span>
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >CTA</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="banner-group-container banner-group-container--2">
          <ul className="banner-group__list banner-group__list--2">
            <li
              className="banner-group-with-title__list__item banner-group__list__item--2"
            >
              <img src="https://fakeimg.pl/578x320/" alt="" />
            </li>
            <li
              className="banner-group-with-title__list__item banner-group__list__item--2"
            >
              <img src="https://fakeimg.pl/578x320/" alt="" />
            </li>
          </ul>
        </section>

        <section className="banner-group-with-title-container">
          <h3 className="banner-group-with-title__title title">Title</h3>
          <ul className="banner-group__list banner-group-with-title__list">
            <li className="banner-group-with-title__list__item">
              <img src="https://fakeimg.pl/169x100/" alt="" />
            </li>
            <li className="banner-group-with-title__list__item">
              <img src="https://fakeimg.pl/169x100/" alt="" />
            </li>
            <li className="banner-group-with-title__list__item">
              <img src="https://fakeimg.pl/169x100/" alt="" />
            </li>
            <li className="banner-group-with-title__list__item">
              <img src="https://fakeimg.pl/169x100/" alt="" />
            </li>
            <li className="banner-group-with-title__list__item">
              <img src="https://fakeimg.pl/169x100/" alt="" />
            </li>
            <li className="banner-group-with-title__list__item">
              <img src="https://fakeimg.pl/169x100/" alt="" />
            </li>
          </ul>
        </section>

        <section className="shelf-container-2">
          <h3 className="shelf_title title">Title</h3>
          <ul className="shelf__list shelf__list-2">
            <li className="shelf__list__item">
              <div className="product-card">
                <a className="product-card__link" href="/templates/index.html"></a>
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
                  <span className="product-card__content__price">R$ 000,00</span>
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >CTA</a
                  >
                </div>
              </div>
            </li>
            <li className="shelf__list__item">
              <div className="product-card">
                <a className="product-card__link" href="/templates/index.html"></a>
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
                  <span className="product-card__content__price">R$ 000,00</span>
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >CTA</a
                  >
                </div>
              </div>
            </li>
            <li className="shelf__list__item">
              <div className="product-card">
                <a className="product-card__link" href="/templates/index.html"></a>
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
                  <span className="product-card__content__price">R$ 000,00</span>
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >CTA</a
                  >
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="banner-group-container banner-group-container--3">
          <ul className="banner-group__list banner-group__list--3">
            <li
              className="banner-group-with-title__list__item banner-group__list__item--3"
            >
              <img src="https://fakeimg.pl/1172x360/" alt="" />
            </li>
          </ul>
        </section>

        <section className="shelf-container-3">
          <h3 className="shelf_title title">Title</h3>
          <ul className="shelf__list shelf__list-3">
            <li className="shelf__list__item">
              <div className="product-card">
                <a className="product-card__link" href="/templates/index.html"></a>
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
                  <span className="product-card__content__price">R$ 000,00</span>
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >CTA</a
                  >
                </div>
              </div>
            </li>

          </ul>
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
                <input type="number" id="inputc" minLength="1" />
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
  );
}
