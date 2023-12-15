import { Produto } from "@/types/Produto";

interface ResumoItemProps {
  content: { produto: Produto; quantidade: number };
}
export function ResumoItem({ content }: ResumoItemProps) {
  return (
    <li className="summary-product-list__list__item">
      <img
        className="product-img--small"
        src={content.produto.srcImagemS}
        alt=""
      />

      <div className="summary-product-list__list__item__info">
        <span className="summary-product-list__list__item__info__name">
          {content.produto.nome}
        </span>
        <span className="summary-product-list__list__item__info__price">
          R$ {(content.produto.preco * content.quantidade).toFixed(2)}
        </span>
      </div>
    </li>
  );
}
