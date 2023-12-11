interface FooterProps {}
export function Footer(props: FooterProps) {
  return (
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
          <p className="footer-legal-info__text">
            Informação de desenvolvimento
          </p>
        </div>
      </div>
    </footer>
  );
}
