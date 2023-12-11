interface BannerSliderListItemProps {}
export function BannerSliderListItem(props: BannerSliderListItemProps) {
  return (
    <li className="banner-slider__list__item">
      <img
        className="banner-slider__list__item__img"
        src="https://fakeimg.pl/1172x364/"
        alt=""
      />
    </li>
  );
}
