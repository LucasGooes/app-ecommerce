interface TipBarListItemProps {
  index: number;
}
export function TipBarListItem(props: TipBarListItemProps) {
  const urls = [
    "https://i.ibb.co/VmrXkS7/icon-1.png",
    "https://i.ibb.co/02QTGy7/icon-2.png",
    "https://i.ibb.co/1sfwy3d/icon-3.png",
    "https://i.ibb.co/3fGkM45/icon-4.png",
    "https://i.ibb.co/RQyk7VG/icon-5.png",
  ];

  const textos = [
    "Parcele em  até 4x",
    "Frete bom",
    "Atendimento mais raíz",
    "Garantia de qualidade",
    "10% de descontos",
  ];
  return (
    <li className="tip-bar__list__item">
      <img src={urls[props.index]} alt="" />
      <span>{textos[props.index]}</span>
    </li>
  );
}
