import CardContent from "./CardContent";
import { CardProps } from "./types";

function Card({ theme, cardLink, handleClick, title, text, imageLink, alt, width, height }: CardProps) {
  if (cardLink) {
    return (
      <a href={cardLink}>
        <CardContent title={title} text={text} imageLink={imageLink} alt={alt} width={width} height={height} />
      </a>)
  }

  return (
    <div onClick={handleClick}>
      <CardContent title={title} text={text} imageLink={imageLink} alt={alt} width={width} height={height} />
    </div>
  )
}
export default Card;
