interface TipBarListItemProps {}
export function TipBarListItem(props: TipBarListItemProps) {
  return (
    <li className="tip-bar__list__item">
      <img src="https://fakeimg.pl/48x48/" alt="" />
      <span>Label em duas linhas</span>
    </li>
  );
}
