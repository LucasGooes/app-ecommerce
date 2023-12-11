interface MinicartProps {}
export default function Minicart(props: MinicartProps) {
  return (
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
            <span className="product-name--2-lines">
              Nome do produto em até duas linhas
            </span>

            <span className="minicart-drawer__product-list__infos__price">
              R$ 000,00
            </span>
          </div>

          <div className="minicart-drawer__product-list__actions">
            <button className="action-remove">
              <span className="material-symbols-outlined"> delete </span>
            </button>

            <div className="qtt-input">
              <button id="minusc">
                <span className="material-symbols-outlined"> remove </span>
              </button>
              <input type="number" value="1" id="inputc" minLength={1} />
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

        <a
          className="minicart-drawer__footer__cta1 cta"
          href="/templates/checkout/cart.html"
        >
          Finalizar pedido
        </a>
        <button
          id="minicartCloseButton"
          className="minicart-drawer__footer__cta2 cta cta2"
        >
          <span className="material-symbols-outlined"> arrow_back </span>{" "}
          Continuar comprando
        </button>
      </div>
    </div>
  );
}
