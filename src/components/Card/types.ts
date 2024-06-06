interface CardMainProps {
  key: number;
  title: string;
  text: string;
  theme: CardTheme;
  cardLink?: string;
  handleClick?: () => void;
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

type CardTheme = 'white' | 'magenta' | 'blue';
export type CardProps = CardMainProps & (CardImageProps | CardNonImageProps);
export type CardTextProps = Pick<CardMainProps, 'text'>;
export type CardTitleProps = Pick<CardMainProps, 'title'>;
export type CardContentProps = Omit<
  CardProps,
  'cardLink' | 'handleClick' | 'theme' | 'cardWidth' | 'key'
>;
