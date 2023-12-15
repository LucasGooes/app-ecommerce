"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Minicart from "@/components/minicart";
import { ProdutoItem } from "@/components/produto-item";
import { TopBar } from "@/components/topbar";
import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import { Produto } from "@/types/Produto";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "../../../global/styles/reset.css";
import "../../../global/styles/style.css";

const slickSettingsShelf1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function Produto({ params }: { params: { id: string } }) {
  const [produto, setProduto] = useState<Produto | null>(null);
  const [produtos, setProdutos] = useState<{ content: Produto[] }>({
    content: [],
  });

  const [aberto, setAberto] = useState<boolean>(false);

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

    buscarProdutoPorId();
  }, []);

  const { setProdutosSelecionado } = useCarrinhoContext();

  const handleClickAdd = async () => {
    // verificar se o id ja existe no array para atualizar a quantidade
    if (produto) {
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
    }
  };

  const handleClickPlus = () => {
    if (produto)
      setProdutosSelecionado((items) => {
        return items.map((item) => {
          if (item.produto.id === produto.id) {
            return { ...item, quantidade: item.quantidade + 1 };
          }
          return item;
        });
      });
  };

  const handleClickMinus = () => {
    if (produto)
      setProdutosSelecionado((items) => {
        return items.map((item) => {
          if (item.produto.id === produto.id) {
            return { ...item, quantidade: item.quantidade - 1 };
          }
          return item;
        });
      });
  };

  return (
    <>
      <TopBar />
      <Header aberto={aberto} setAberto={setAberto} />

      <main className="pdp-container container" style={{ width: "100%" }}>
        <div className="pdp-main-content">
          <img
            className="pdp-main-content__img"
            src={produto?.srcImagem}
            alt=""
          />
          <aside className="pdp-main-content__info-area">
            <div className="pdp-main-content__info-area__named-id">
              <h1 className="pdp-main-content__title">{produto?.nome}</h1>

              <span className="pdp-main-content__id">
                {"Ref." + produto?.codigo}
              </span>
            </div>

            <div className="pdp-main-content__info-area__small">
              <div className="pdp-main-content__desc">
                <p
                  className="pdp-main-content__desc__text"
                  dangerouslySetInnerHTML={{ __html: produto?.descricao || "" }}
                ></p>
                <a className="pdp-main-content__see-more" href="#pdpMore">
                  Ver mais
                </a>
              </div>

              <span className="pdp-main-content__price">
                {"R$ " + produto?.preco}
              </span>
              <div className="pdp-main-content__buy-area">
                <div className="qtt-input">
                  <button id="minus" onClick={handleClickMinus}>
                    <span className="material-symbols-outlined"> remove </span>
                  </button>
                  <input type="number" value="1" id="input" minLength={1} />
                  <button id="plus" onClick={handleClickPlus}>
                    <span className="material-symbols-outlined"> add </span>
                  </button>
                </div>
                <button
                  className="pdp-main-content__buy-button cta"
                  onClick={handleClickAdd}
                >
                  CTA
                </button>
              </div>
            </div>
          </aside>
        </div>

        <section id="pdpMore" className="pdp-details-area">
          <h3>Descrição</h3>
          <p dangerouslySetInnerHTML={{ __html: produto?.descricao || "" }}></p>
        </section>

        <section className="pdp-details-area">
          <h3>Dados técnicos</h3>
          <p
            dangerouslySetInnerHTML={{ __html: produto?.descricao2 || "" }}
          ></p>
        </section>

        <section>
          <img src="https://i.ibb.co/bXLwSDf/secondary-banner-1.png" alt="" />
        </section>

        <section className="shelf-container">
          <h3 className="shelf_title title">Interessados</h3>
          <ul className="shelf__list shelf__list-1">
            <Slider {...slickSettingsShelf1}>
              {produtos.content.map((item, index) => (
                <li
                  key={index}
                  className="shelf__list__item"
                  id={item.id.toString()}
                >
                  <ProdutoItem key={index} produto={item} />
                </li>
              ))}
            </Slider>
          </ul>
        </section>
      </main>

      <Footer />

      <Minicart aberto={aberto} fechar={() => setAberto(false)} />
    </>
  );
}
