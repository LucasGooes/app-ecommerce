"use client";

import "../../global/styles/reset.css";
import "../../global/styles/style.css";
import { useEffect, useState } from "react";

export default function CheckoutInfoAndPayment() {
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
              <progress id="checkoutProgress" value="90" max="100"></progress>
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

      <main style={{ width: "100%" }}>
        <form className="checkout-container container">
          <div className="checkout-form-boxes">
            <div className="checkout-box forms">
              <span className="checkout-form-boxes__title"
              ><strong>1</strong> Dados pessoais e entrega</span
              >

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="checkoutEmail">Email</label className="checkout-text-1">
                  <input required type="text" name="" id="checkoutEmail" placeholder="email@exemplo.com" />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="fullName">Nome Completo</label className="checkout-text-1">
                  <input required type="text" name="" id="fullName" placeholder="Ex.: José da Silva" />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="phone">Celular</label className="checkout-text-1">
                  <input required type="text" name="" id="phone" placeholder="Ex.: (00) 00000-0000" />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" for="cep">CEP</label className="checkout-text-1">
                  <input required type="text" name="" id="cep" placeholder="Ex.: 00000-000" />
                </div>

                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="adress">Endereço</label className="checkout-text-1">
                  <input required type="text" name="" id="adress" placeholder="Ex.: Rua de exemplo" />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="adressNumber">Número</label className="checkout-text-1">
                  <input required type="text" name="" id="adressNumber" placeholder="Número" />
                </div>

                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="adressNeighborhood">Bairro</label className="checkout-text-1">
                  <input required type="text" name="" id="adressNeighborhood" placeholder="Bairro" />
                </div>

                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="adressComplement">Complemento</label className="checkout-text-1">
                  <input required type="text" name="" id="adressComplement" placeholder="Ex.: Ap 14" />
                </div>
              </div>
            </div>

            <div className="checkout-box forms">
              <span className="checkout-form-boxes__title"
              ><strong>2</strong> Pagamento</span
              >

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="cardNumber">Número do cartão</label className="checkout-text-1">
                  <input required type="number" name="" id="cardNumber" placeholder="Ex.: 0000 0000 0000 0000" />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input">
                  <label className="checkout-text-1" htmlFor="cardHolder"
                  >Nome do proprietário (como impresso no cartão)</label className="checkout-text-1"
                >
                  <input required type="text" name="" id="cardHolder" placeholder="Ex.: José da Silva" />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input installments">
                  <label className="checkout-text-1" htmlFor="checkoutInstallments">Parcelas</label className="checkout-text-1">
                  <select name="checkoutInstallments" id="checkoutInstallments">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>

                <div className="checkout-form-boxes__line__input expiration-date">
                  <label className="checkout-text-1" htmlFor="expirationDate">Validade</label className="checkout-text-1">
                  <input required type="date" name="" id="expirationDate" />
                </div>
              </div>

              <div className="checkout-form-boxes__line">
                <div className="checkout-form-boxes__line__input cvv">
                  <label className="checkout-text-1" htmlFor="cvv">CVV</label className="checkout-text-1">
                  <input required type="number" name="" id="cvv" placeholder="Ex.: 000" />
                </div>

                <div className="billingcheckbox">
                  <label className="checkout-text-1 db" htmlFor="sameAdressForBilling"
                  >Usar endereço da entrega como endereço de cobrança</label className="checkout-text-1"
                >
                  <input className="billingcheckbox" type="checkbox" id="sameAdressForBilling" />
                </div>
              </div>

            </div>
          </div>

          <div className="checkout-box checkout-box--right">
            <div className="summary-product-list">
              <h4 className="checkout-text-1">Resumo</h4>
              <ul className="summary-product-list__list">
                <li className="summary-product-list__list__item">
                  <img
                    className="product-img--small"
                    src="https://fakeimg.pl/70x70/"
                    alt=""
                  />

                  <div className="summary-product-list__list__item__info">
                    <span className="summary-product-list__list__item__info__name"
                    >Nome do produto em até uma linha</span
                    >
                    <span className="summary-product-list__list__item__info__price"
                    >R$ 000,00</span
                    >
                  </div>
                </li>

                <li className="summary-product-list__list__item">
                  <img
                    className="product-img--small"
                    src="https://fakeimg.pl/70x70/"
                    alt=""
                  />

                  <div className="summary-product-list__list__item__info">
                    <span className="summary-product-list__list__item__info__name"
                    >Nome do produto em até uma linha</span
                    >
                    <span className="summary-product-list__list__item__info__price"
                    >R$ 000,00</span
                    >
                  </div>
                </li>

                <li className="summary-product-list__list__item">
                  <img
                    className="product-img--small"
                    src="https://fakeimg.pl/70x70/"
                    alt=""
                  />

                  <div className="summary-product-list__list__item__info">
                    <span className="summary-product-list__list__item__info__name"
                    >Nome do produto em até uma linha</span
                    >
                    <span className="summary-product-list__list__item__info__price"
                    >R$ 000,00</span
                    >
                  </div>
                </li>
              </ul>
            </div>

            <div className="input-field-1">
              <label className="checkout-text-1" className="checkout-text-1" htmlFor="cupomField">Adicionar Cupom:</label className="checkout-text-1">
              <div className="input-field-1__coupom">
                <input id="cupomField" type="text" placeholder="CUPOM" />
                <button>Adicionar</button>
              </div>
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

            <button type="submit" className="cta checkout">Finalizar</button>
            <a className="cta2 checkout" href="/templates/checkout/cart.html">Voltar</a>
          </div>
        </form>
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
                <input required type="number" value="1" id="inputc" minlength="1" />
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