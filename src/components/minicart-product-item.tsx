import { useCarrinhoContext } from "@/contexts/CarrinhoContext";
import { Produto } from "@/types/Produto";

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
    setProdutosSelecionado((items) =>
      items.map((item) => {
        if (item.produto.id === content.produto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      })
    );
  };

  const handleClickMinus = () => {
    setProdutosSelecionado((items) =>
      items.map((item) => {
        if (item.produto.id === content.produto.id) {
          return { ...item, quantidade: item.quantidade - 1 };
        }
        return item;
      })
    );
  };
  return (
    <li className="minicart-drawer__product-list__item">
      <img
        className="product-img--medium"
        src="https://fakeimg.pl/100x100/"
        alt=""
      />
      <div className="minicart-drawer__product-list__infos">
        <span className="product-name--2-lines">{content.produto.nome}</span>

        <span className="minicart-drawer__product-list__infos__price">
          R$ {content.produto.preco.toFixed(2)}
        </span>
      </div>

      <div
        className="minicart-drawer__product-list__actions"
        onClick={handleClickDelete}
      >
        <button className="action-remove">
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
