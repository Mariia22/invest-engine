import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import { CardContentProps } from "./types";

function CardContent({ title, titleSize, text, imageLink, alt, width, height }: CardContentProps) {
  return (
    <>
      <CardTitle title={title} titleSize={titleSize} />
      <div className="card__content">
        <CardText text={text} />
        {imageLink && alt && width && height && <CardImage imageLink={imageLink} alt={alt} width={width} height={height} />}
      </div>
    </>
  );
}
export default CardContent;
