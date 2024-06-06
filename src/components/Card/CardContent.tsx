import CardImage from "./CardImage";
import CardText from "./CardText";
import CardTitle from "./CardTitle";
import { CardContentProps } from "./types";

function CardContent({ title, text, imageLink, alt, width, height }: CardContentProps) {
  return (
    <>
      <CardTitle title={title} />
      <div>
        <CardText text={text} />
        {imageLink && alt && width && height && <CardImage imageLink={imageLink} alt={alt} width={width} height={height} />}
      </div>
    </>
  );
}
export default CardContent;
