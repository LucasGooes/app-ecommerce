interface BannerSliderListItemProps {
  index: number;
}
export function BannerSliderListItem(props: BannerSliderListItemProps) {
  const urls = [
    "https://i.ibb.co/nC28vxQ/main-banner-1.png",
    "https://i.ibb.co/wSVrvc8/main-banner-2.png",
    "https://i.ibb.co/x31pLmb/main-banner-3.png",
  ];
  return (
    <li className="banner-slider__list__item">
      <img
        className="banner-slider__list__item__img"
        src={urls[props.index]}
        alt=""
      />
    </li>
  );
}
