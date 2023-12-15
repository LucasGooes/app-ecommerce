interface BannerGroupListItemProps {
  index: number;
}
export function BannerGroupListItem(props: BannerGroupListItemProps) {
  const urls = [
    "https://i.ibb.co/0Vphj7f/mini-banner-1.png",
    "https://i.ibb.co/7Nfhd7s/mini-banner-2.png",
    "https://i.ibb.co/Qk8fYxh/mini-banner-3.png",
    "https://i.ibb.co/2Njy9Rx/mini-banner-4.png",
  ];
  return (
    <li className="banner-group__list__item">
      <img src={urls[props.index]} alt="" />
    </li>
  );
}
