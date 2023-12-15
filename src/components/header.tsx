"use client";
import { Categoria } from "@/types/Categoria";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonMiniCart } from "./button-minicart";
import { CategoriaComponent } from "./categoria";

interface HeaderProps {
  aberto: boolean;
  setAberto: (aberto: boolean) => void;
}
export function Header({ aberto, setAberto }: HeaderProps) {
  const [categorias, setCategorias] = useState<{ content: Categoria[] }>({
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
    listarCategorias();
  }, []);

  const handleClickButton = () => {
    setAberto(!aberto);
  };

  return (
    <>
      <header className="header-container sticky0">
        <div className="header-main-content">
          <div className="header-main-content__inner-container container">
            <Link href="/">
              <img
                className="header-main-content__inner-container__logo"
                src="https://i.ibb.co/m8FmRgz/logo-no-bg.png"
                alt=""
              />
            </Link>

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
              <ButtonMiniCart abrirMiniCart={handleClickButton} />
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
    </>
  );
}
