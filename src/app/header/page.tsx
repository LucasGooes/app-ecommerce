import style from './page.module.css';
import sass from './page.module.scss';

export default function HeaderMain() {
  return (
    <header className={`style.header-container style.sticky0`}>
      <div className={`style.header-main-content`}>
        <div className="header-main-content__inner-container container">
          <a href="/">
            <img
              className="header-main-content__inner-container__logo"
              src="https://fakeimg.pl/120x70/"
              alt=""
            /></a>

          <search className="search-bar">
            <form className="search-bar-inner">
              <input
                className="search-bar__input-box"
                type="text"
                id="search"
                name="busca"
                placeholder="O que você procura?"
              />
              <button className="search-bar__submit-button" type="submit">
                <span className="material-symbols-outlined"> search </span>
              </button>
            </form>
          </search>

          <div className="header-actions">
            <a className="header-actions__shortcut" href="/">
              <span className="material-symbols-outlined"> support_agent </span>
              <span>Label</span>
            </a>
            <button
              id="minicartIcon"
              title="minicart"
              className="header-actions__minicart"
            >
              <span id="minicartQtt" className="cart-qtt">0</span>
              <span className="material-symbols-outlined"> shopping_cart </span>
            </button>
          </div>
        </div>
      </div>
      <div className="header-menu">
        <nav className="header-menu__inner container">
          <ul className="header-menu__inner__list">
            <li className="header-menu__inner__list__item">
              <a href="/plp.html" className="header-menu__inner__list__item__link"
              >Departamento</a
              >
            </li>
            <li className="header-menu__inner__list__item">
              <a href="/plp.html" className="header-menu__inner__list__item__link"
              >Departamento</a
              >
            </li>
            <li className="header-menu__inner__list__item">
              <a href="/plp.html" className="header-menu__inner__list__item__link"
              >Departamento</a
              >
            </li>
            <li className="header-menu__inner__list__item">
              <a href="/plp.html" className="header-menu__inner__list__item__link"
              >Departamento</a
              >
            </li>
            <li className="header-menu__inner__list__item">
              <a href="/plp.html" className="header-menu__inner__list__item__link"
              >Departamento</a
              >
            </li>
            <li className="header-menu__inner__list__item">
              <a href="/plp.html" className="header-menu__inner__list__item__link"
              >Departamento</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}