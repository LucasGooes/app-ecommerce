import '../../global/styles/style.css'
import '../../global/styles/reset.css'
import '../../global/js/slick/slick.css'

export default function Pdp() {
  return (

    <main className="pdp-container container" style={{ width: "100%" }}>
      < div className="pdp-main-content" >
        <img
          className="pdp-main-content__img"
          src="https://fakeimg.pl/556x556/"
          alt=""
        />
        <aside className="pdp-main-content__info-area">
          <div className="pdp-main-content__info-area__named-id">
            <h1 className="pdp-main-content__title">
              Nome completo do produto em até duas linhas
            </h1>

            <span className="pdp-main-content__id">Ref. 0000</span>
          </div>

          <div className="pdp-main-content__info-area__small">
            <div className="pdp-main-content__desc">
              <p className="pdp-main-content__desc__text">
                Descrição rápida do produto com limite de tamanho...
              </p>
              <a className="pdp-main-content__see-more" href="#pdpMore">Ver mais</a>
            </div>

            <span className="pdp-main-content__price">R$ 000,00</span>
            <form className="pdp-main-content__buy-area">
              <div className="qtt-input">
                <button id="minus">
                  <span className="material-symbols-outlined"> remove </span>
                </button>
                <input type="number" value="1" id="input" minlength="1" />
                <button id="plus">
                  <span className="material-symbols-outlined"> add </span>
                </button>
              </div>
              <button className="pdp-main-content__buy-button cta">CTA</button>
            </form>
          </div>
        </aside>
      </div >

      <section id="pdpMore" className="pdp-details-area">
        <h3>Descrição</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
          metus at sapien rhoncus faucibus. Aliquam ac lacus est. Curabitur
          euismod ut nisl quis rutrum. Donec hendrerit, lorem a iaculis
          placerat, tortor ligula placerat elit, id eleifend leo nulla vel
          dolor. Donec at orci luctus, porttitor enim a, vehicula turpis. className
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam ut erat ipsum. Suspendisse convallis massa
          a ex accumsan cursus. Cras ipsum nisi, porta nec quam et, gravida
          sollicitudin arcu. Morbi elementum mi at aliquet rutrum. Quisque
          tincidunt, velit id tincidunt ullamcorper, ex lacus pretium enim,
          elementum congue magna ipsum a nisl. Quisque in orci feugiat,
          vulputate metus sit amet, dignissim quam. Vestibulum tincidunt sapien
          diam, vehicula luctus orci iaculis id.
        </p>
      </section>

      <section className="pdp-details-area">
        <h3>Dados técnicos</h3>
        <p>Campo: Valor Campo: Valor Campo: Valor Campo: Valor Campo: Valor</p>
      </section>

      <section>
        <img src="https://fakeimg.pl/1172x360/" alt="" />
      </section>

      <section className="shelf-container">
        <h3 className="shelf_title title">Title</h3>
        <ul className="shelf__list shelf__list-1">
          <li className="shelf__list__item">
            <div className="product-card">
              <a className="product-card__link" href="/"></a>
              <div className="product-card__image">
                <img
                  src="https://fakeimg.pl/227x227/"
                  alt=""
                  className="product-card__image__image"
                />
              </div>
              <div className="product-card__content">
                <h4 className="product-card__content__title">
                  product name (max 2 lines)
                </h4>
                <span className="product-card__content__price">R$ 000,00</span>
                <button className="cta product-card__content__buy-button">
                  CTA
                </button>
              </div>
            </div>
          </li>
          <li className="shelf__list__item">
            <div className="product-card">
              <a className="product-card__link" href="/"></a>
              <div className="product-card__image">
                <img
                  src="https://fakeimg.pl/227x227/"
                  alt=""
                  className="product-card__image__image"
                />
              </div>
              <div className="product-card__content">
                <h4 className="product-card__content__title">
                  product name (max 2 lines)
                </h4>
                <span className="product-card__content__price">R$ 000,00</span>
                <button className="cta product-card__content__buy-button">
                  CTA
                </button>
              </div>
            </div>
          </li>
          <li className="shelf__list__item">
            <div className="product-card">
              <a className="product-card__link" href="/"></a>
              <div className="product-card__image">
                <img
                  src="https://fakeimg.pl/227x227/"
                  alt=""
                  className="product-card__image__image"
                />
              </div>
              <div className="product-card__content">
                <h4 className="product-card__content__title">
                  product name (max 2 lines)
                </h4>
                <span className="product-card__content__price">R$ 000,00</span>
                <button className="cta product-card__content__buy-button">
                  CTA
                </button>
              </div>
            </div>
          </li>
          <li className="shelf__list__item">
            <div className="product-card">
              <a className="product-card__link" href="/"></a>
              <div className="product-card__image">
                <img
                  src="https://fakeimg.pl/227x227/"
                  alt=""
                  className="product-card__image__image"
                />
              </div>
              <div className="product-card__content">
                <h4 className="product-card__content__title">
                  product name (max 2 lines)
                </h4>
                <span className="product-card__content__price">R$ 000,00</span>
                <button className="cta product-card__content__buy-button">
                  CTA
                </button>
              </div>
            </div>
          </li>
          <li className="shelf__list__item">
            <div className="product-card">
              <a className="product-card__link" href="/"></a>
              <div className="product-card__image">
                <img
                  src="https://fakeimg.pl/227x227/"
                  alt=""
                  className="product-card__image__image"
                />
              </div>
              <div className="product-card__content">
                <h4 className="product-card__content__title">
                  product name (max 2 lines)
                </h4>
                <span className="product-card__content__price">R$ 000,00</span>
                <button className="cta product-card__content__buy-button">
                  CTA
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main >
  )
}