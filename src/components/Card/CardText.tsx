import { CardTextProps } from "./types";

function CardText({ text }: CardTextProps) {
  return (
    <p className="card__text">{text}</p>
  );
}
export default CardText;
