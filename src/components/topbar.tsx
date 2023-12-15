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
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item" id="2">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li className="top-bar__text-list__item" id="3">
            <span>Lorem ipsum dolor sit amet</span>
          </li>
        </Slider>
      </ul>
    </div>
  );
}
