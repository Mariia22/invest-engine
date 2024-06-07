import CardContent from "./CardContent";
import { CardProps } from "./types";
import './Card.css';
import './../../index.css';
import cx from 'classnames';

function Card({ clickable, theme, cardLink, onClick, title, titleSize, text, imageLink, alt, width, height, style, className }: CardProps) {
  const content = <CardContent title={title} titleSize={titleSize} text={text} imageLink={imageLink} alt={alt} width={width} height={height} />;

  if (!clickable) {
    return (
      <div className={cx("card", theme, className)} style={style}>{content}</div>
    )
  }

  if (cardLink) {
    return (
      <a href={cardLink} className={cx("card", "card-clickable", theme, className)} style={style}>{content}</a>)
  }

  return (
    <div onClick={onClick} className={cx("card", "card-clickable", theme, className)} style={style}>{content}</div>
  )
}
export default Card;
