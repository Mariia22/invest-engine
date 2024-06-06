import { CardImageProps } from "./types";

function CardImage({ imageLink, alt, width, height }: CardImageProps) {
  return <img src={imageLink} alt={alt} width={width} height={height} />;
}
export default CardImage;
