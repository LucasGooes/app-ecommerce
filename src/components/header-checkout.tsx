import { Categoria } from "@/types/Categoria";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CategoriaComponent } from "./categoria";

interface HeaderCheckoutProps {
  info?: boolean;
  info2?: boolean;
}
export function HeaderCheckout({ info, info2 }: HeaderCheckoutProps) {
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

  return (
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

          <div className="checkout-progress">
            <label className="checkout-text-1" htmlFor="checkoutProgress">
              Finalizar pedido
            </label>
            <progress
              id="checkoutProgress"
              value={info ? (info2 ? 100 : 90) : 50}
              max="100"
            ></progress>
          </div>

          <div className="header-actions">
            <a
              className="header-actions__shortcut"
              href="mailto:sac@email.com.br?subject=Atendimento e-commerce&body=Olá, venho do e-commerce e preciso de ajudar com o seguinte problema:"
            >
              <span className="material-symbols-outlined"> support_agent </span>
              <span>Atendimento</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header-menu">
        <nav className="header-menu__inner container">
          <ul className="header-menu__inner__list">
            {categorias.content.map((categoria, index) => (
              <CategoriaComponent categoria={categoria} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
