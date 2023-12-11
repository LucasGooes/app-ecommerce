import { Categoria } from "@/types/Categoria";
import Link from "next/link";

interface CategoriaComponentProps {
  categoria: Categoria;
}
export function CategoriaComponent({ categoria }: CategoriaComponentProps) {
  return (
    <li
      className="header-menu__inner__list__item"
      id={categoria.codigo.toString()}
    >
      <Link
        href={`/filtrar-categoria/${categoria.codigo}?descricao=${categoria.descricao}`}
        className="header-menu__inner__list__item__link"
      >
        {categoria.descricao}
      </Link>
    </li>
  );
}
