import CardContent from "./CardContent";
import { CardProps } from "./types";
import './Card.css';
import './../../index.css';
import cx from 'classnames';

function Card({ cardIsClickable, theme, cardLink, handleClick, title, titleSize, text, imageLink, alt, width, height, cardSpan }: CardProps) {
  if (cardLink) {
    return (
      <a href={cardLink} className={cx("card", theme, cardIsClickable && "card__pointer", cardSpan)}>
        <CardContent title={title} titleSize={titleSize} text={text} imageLink={imageLink} alt={alt} width={width} height={height} />
      </a>)
  }

  return (
    <div onClick={handleClick} className={cx("card", theme, cardIsClickable && "card__pointer", cardSpan)}>
      <CardContent title={title} titleSize={titleSize} text={text} imageLink={imageLink} alt={alt} width={width} height={height} />
    </div>
  )
}
export default Card;
