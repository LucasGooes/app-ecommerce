"use client";

import "../global/styles/reset.css";
import "../global/styles/style.css";
//import "../global/js/base-script.js";

import { BannerGroupListItem } from "@/components/banner-group-list-item";
import { BannerSliderListItem } from "@/components/banner-slider-list-item";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Minicart from "@/components/minicart";
import { ProdutoItem } from "@/components/produto-item";
import { TipBarListItem } from "@/components/tip-bar-list-item";
import { Produto } from "@/types/Produto";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const slickSettingsTopBar = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const slickSettingsShelf1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const slickSettingsShelf2 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Home() {
  const [produtos, setProdutos] = useState<{ content: Produto[] }>({
    content: [],
  });

  const [aberto, setAberto] = useState<boolean>(false);

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
    listarPaginaProdutos();
  }, []);
  if (produtos.content.length === 0) {
    return <div>Carregando...</div>;
  }
  return (
    <>
      <div className="top-bar">
        <ul className="top-bar__text-list container">
          <Slider {...slickSettingsTopBar}>
            <li className="top-bar__text-list__item" id="1">
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li className="top-bar__text-list__item" id="2">
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li className="top-bar__text-list__item" id="3">
              <span>Lorem ipsum dolor sit amet</span>
            </li>
          </Slider>
        </ul>
      </div>
      <Header aberto={aberto} setAberto={setAberto} />

      <main className="home-container container" style={{ width: "100%" }}>
        <section className="banner-slider" style={{ width: "100%" }}>
          <ul className="banner-slider__list" style={{ width: "100%" }}>
            {Array.from({ length: 3 }).map((_, index) => (
              <BannerSliderListItem />
            ))}
          </ul>
        </section>

        <section className="tip-bar-container">
          <ul className="tip-bar__list">
            {Array.from({ length: 4 }).map((_, index) => (
              <TipBarListItem />
            ))}
          </ul>
        </section>

        <section className="banner-group-container">
          <ul className="banner-group__list">
            {Array.from({ length: 3 }).map((_, index) => (
              <BannerGroupListItem />
            ))}
          </ul>
        </section>

        <section className="shelf-container">
          <h3 className="shelf_title title">Title</h3>
          <ul className="shelf__list shelf__list-1">
            <Slider {...slickSettingsShelf1}>
              {produtos.content.map((produto) => (
                <>
                  <ProdutoItem produto={produto} />
                </>
              ))}
            </Slider>
          </ul>
        </section>

        <section className="banner-group-container banner-group-container--2">
          <ul className="banner-group__list banner-group__list--2">
            <li className="banner-group-with-title__list__item banner-group__list__item--2">
              <img src="https://fakeimg.pl/578x320/" alt="" />
            </li>
            <li className="banner-group-with-title__list__item banner-group__list__item--2">
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
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >
                    CTA
                  </a>
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
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >
                    CTA
                  </a>
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
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >
                    CTA
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="banner-group-container banner-group-container--3">
          <ul className="banner-group__list banner-group__list--3">
            <li className="banner-group-with-title__list__item banner-group__list__item--3">
              <img src="https://fakeimg.pl/1172x360/" alt="" />
            </li>
          </ul>
        </section>

        <section className="shelf-container-3">
          <h3 className="shelf_title title">Title</h3>
          <ul className="shelf__list shelf__list-3">
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
                  <a
                    className="cta product-card__content__buy-button"
                    href="/templates/pdp.html"
                  >
                    CTA
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
      <Minicart aberto={aberto} fechar={() => setAberto(false)} />

      <div id="bgLock" className="bg-lock dn"></div>
    </>
  );
}
