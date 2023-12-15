import Slider from "react-slick";

const slickSettingsTopBar = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

interface TopBarProps {}
export function TopBar(props: TopBarProps) {
  return (
    <div className="top-bar">
      <ul className="top-bar__text-list container">
        <Slider {...slickSettingsTopBar}>
          <li className="top-bar__text-list__item" id="1">
            <span>Fametro Farma</span>
          </li>
          <li className="top-bar__text-list__item" id="2">
            <span>20% de desconto para o seu primeiro pedido</span>
          </li>
          <li className="top-bar__text-list__item" id="3">
            <span>Tudo pela metade do dobro!</span>
          </li>
        </Slider>
      </ul>
    </div>
  );
}
