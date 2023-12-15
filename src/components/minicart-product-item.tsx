import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import { Produto } from "@/types/Produto";
import Image from "next/image";

interface MinicartProductItemProps {
  content: {
    quantidade: number;
    produto: Produto;
  };
}
export function MinicartProductItem({ content }: MinicartProductItemProps) {
  const { produtosSelecionados, setProdutosSelecionado } = useCarrinhoContext();

  const handleClickDelete = () => {
    setProdutosSelecionado((items) =>
      items.filter((item) => item.produto.id !== content.produto.id)
    );
  };

  const handleClickPlus = () => {
    setProdutosSelecionado((items) => {
      return items.map((item) => {
        if (item.produto.id === content.produto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
    });
  };

  const handleClickMinus = () => {
    setProdutosSelecionado((items) => {
      return items.map((item) => {
        if (item.produto.id === content.produto.id) {
          return { ...item, quantidade: item.quantidade - 1 };
        }
        return item;
      });
    });
  };
  return (
    <li className="minicart-drawer__product-list__item">
      <Image
        className="product-img--medium"
        src={content.produto.srcImagem}
        alt=""
        width={100}
        height={100}
      />
      <div className="minicart-drawer__product-list__infos">
        <span className="product-name--2-lines">{content.produto.nome}</span>

        <span className="minicart-drawer__product-list__infos__price">
          R$ {content.produto.preco.toFixed(2)}
        </span>
      </div>

      <div className="minicart-drawer__product-list__actions">
        <button className="action-remove" onClick={handleClickDelete}>
          <span className="material-symbols-outlined"> delete </span>
        </button>

        <div className="qtt-input">
          <button id="minusc" onClick={handleClickMinus}>
            <span className="material-symbols-outlined"> remove </span>
          </button>
          <input
            type="number"
            value={content.quantidade}
            id="inputc"
            minLength={1}
          />
          <button id="plusc" onClick={handleClickPlus}>
            <span className="material-symbols-outlined"> add </span>
          </button>
        </div>
      </div>
    </li>
  );
}
