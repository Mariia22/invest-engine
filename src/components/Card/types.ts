interface CardMainProps {
  key: number;
  cardIsClickable: boolean;
  title: string;
  titleSize: CardTitleSize;
  text: string;
  theme: CardTheme;
  cardLink?: string;
  handleClick?: () => void;
  cardSpan?: CardSpan;
}

export interface CardImageProps {
  imageLink: string;
  alt: string;
  width: number;
  height: number;
}

interface CardNonImageProps {
  imageLink?: undefined;
  alt?: never;
  width?: never;
  height?: never;
}

export type CardTheme = 'white' | 'magenta' | 'blue';
export type CardTitleSize =
  | 'card__title__xs'
  | 'card__title__small'
  | 'card__title__medium'
  | 'card__title__large';
export type CardSpan = 'card__span2' | 'card__span3';
export type CardProps = CardMainProps & (CardImageProps | CardNonImageProps);
export type CardTextProps = Pick<CardMainProps, 'text'>;
export type CardTitleProps = Pick<CardMainProps, 'title' | 'titleSize'>;
export type CardContentProps = Omit<
  CardProps,
  'cardLink' | 'handleClick' | 'theme' | 'cardWidth' | 'key' | 'cardIsClickable'
>;
