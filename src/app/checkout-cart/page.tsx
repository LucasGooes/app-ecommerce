"use client";

import "../../global/styles/reset.css";
import "../../global/styles/style.css";

export default function CheckoutCart() {
  return (
    <>
      <div className="top-bar">
        <ul className="top-bar__text-list container">
          <li className="top-bar__text-list__item">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item">
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

            <div className="checkout-progress">
              <label className="checkout-text-1" htmlFor="checkoutProgress">Finalizar pedido</label>
              <progress id="checkoutProgress" value="50" max="100"></progress>
            </div>

            <div className="header-actions">
              <a className="header-actions__shortcut" href="mailto:sac@email.com.br?subject=Atendimento e-commerce&body=Olá, venho do e-commerce e preciso de ajudar com o seguinte problema:">
                <span className="material-symbols-outlined"> support_agent </span>
                <span>Atendimento</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header-menu">
          <nav className="header-menu__inner container">
            <ul className="header-menu__inner__list">
              <li className="header-menu__inner__list__item">
                <a
                  href="templates/plp.html"
                  className="header-menu__inner__list__item__link"
                >Departamento</a
                >
              </li>
              <li className="header-menu__inner__list__item">
                <a
                  href="templates/plp.html"
                  className="header-menu__inner__list__item__link"
                >Departamento</a
                >
              </li>
              <li className="header-menu__inner__list__item">
                <a
                  href="templates/plp.html"
                  className="header-menu__inner__list__item__link"
                >Departamento</a
                >
              </li>
              <li className="header-menu__inner__list__item">
                <a
                  href="templates/plp.html"
                  className="header-menu__inner__list__item__link"
                >Departamento</a
                >
              </li>
              <li className="header-menu__inner__list__item">
                <a
                  href="templates/plp.html"
                  className="header-menu__inner__list__item__link"
                >Departamento</a
                >
              </li>
              <li className="header-menu__inner__list__item">
                <a
                  href="templates/plp.html"
                  className="header-menu__inner__list__item__link"
                >Departamento</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="checkout-container container" style={{ width: "100%" }}>
        <div className="checkout-box checkout-box--left">
          <h1 className="checkout-text-1">Seus produtos</h1>
          <ul className="checkout-product-list">
            <li className="checkout-product-list__item">
              <div className="checkout-img-and-title">
                <img
                  className="product-img--medium"
                  src="https://fakeimg.pl/100x100/"
                  alt=""
                />

                <span className="checkout-product-name checkout-text-1"
                >Nome do produto em até duas linhas</span
                >
              </div>

              <div className="qtt-input">
                <button id="minusa">
                  <span className="material-symbols-outlined"> remove </span>
                </button>
                <input type="number" value="1" id="inputa" minLength="1" />
                <button id="plusa">
                  <span className="material-symbols-outlined"> add </span>
                </button>
              </div>

              <span className="checkout-box--left price">R$ 000,00</span>

              <button className="action-remove">
                <span className="material-symbols-outlined"> delete </span>
              </button>
            </li>

            <li className="checkout-product-list__item">
              <div className="checkout-img-and-title">
                <img
                  className="product-img--medium"
                  src="https://fakeimg.pl/100x100/"
                  alt=""
                />

                <span className="checkout-product-name checkout-text-1"
                >Nome do produto em até duas linhas</span
                >
              </div>

              <div className="qtt-input">
                <button id="minusa">
                  <span className="material-symbols-outlined"> remove </span>
                </button>
                <input type="number" value="1" id="inputa" minLength="1" />
                <button id="plusa">
                  <span className="material-symbols-outlined"> add </span>
                </button>
              </div>

              <span className="checkout-box--left price">R$ 000,00</span>

              <button className="action-remove">
                <span className="material-symbols-outlined"> delete </span>
              </button>
            </li>

            <li className="checkout-product-list__item">
              <div className="checkout-img-and-title">
                <img
                  className="product-img--medium"
                  src="https://fakeimg.pl/100x100/"
                  alt=""
                />

                <span className="checkout-product-name checkout-text-1"
                >Nome do produto em até duas linhas</span
                >
              </div>

              <div className="qtt-input">
                <button id="minusa">
                  <span className="material-symbols-outlined"> remove </span>
                </button>
                <input type="number" value="1" id="inputa" minLength="1" />
                <button id="plusa">
                  <span className="material-symbols-outlined"> add </span>
                </button>
              </div>

              <span className="checkout-box--left price">R$ 000,00</span>

              <button className="action-remove">
                <span className="material-symbols-outlined"> delete </span>
              </button>
            </li>
          </ul>
        </div>

        <div className="checkout-box checkout-box--right">
          <div className="input-field-1">
            <label className="checkout-text-1" htmlFor="cupomField"
            >Adicionar Cupom:</label
            >
            <form className="input-field-1__coupom">
              <input id="cupomField" type="text" placeholder="CUPOM" />
              <button>Adicionar</button>
            </form>
          </div>

          <div className="input-field-1">
            <label className="checkout-text-1" htmlFor="shippingField"
            >Calcular o frete:</label
            >
            <form className="input-field-1__shipping">
              <input id="shippingField" type="text" placeholder="CEP" />
              <button>Calcular</button>
            </form>
          </div>

          <div className="detailed-cost">
            <div className="detailed-cost__line">
              <span>Subtotal</span>
              <span> R$000,00</span>
            </div>

            <div className="detailed-cost__line">
              <span>Frete</span>
              <span> R$000,00</span>
            </div>
          </div>

          <div className="total-cost">
            <span className="checkout-text-1 tb">Total</span>
            <span className="checkout-text-1 tb"> R$000,00</span>
          </div>

          <a className="cta checkout" href="/templates/checkout/info-and-payment.html">Continuar</a>
          <a className="cta2 checkout" href="/templates/index.html">Adicionar outros produtos</a>
        </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                pretium non purus id suscipit.
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
                <input type="number" value="1" id="inputc" minLength="1" />
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
  )
}