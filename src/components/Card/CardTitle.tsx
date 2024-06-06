import { CardTitleProps } from "./types";
import cx from 'classnames';

function CardTitle({ title, titleSize }: CardTitleProps) {
  return (
    <h2 className={cx("card__title", titleSize)}>{title}</h2>
  );
}
export default CardTitle;
