import { CSSProperties } from 'react';

interface CardMainProps {
  key: number;
  clickable: boolean;
  title: string;
  titleSize: CardTitleSize;
  text: string;
  theme: CardTheme;
  cardLink?: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
}

export interface CardImageProps {
  imageLink: string;
  alt: string;
  ariaLabel?: string;
  width: number;
  height: number;
}

interface CardNonImageProps {
  imageLink?: undefined;
  alt?: never;
  ariaLabel?: never;
  width?: never;
  height?: never;
}

export type CardTheme = 'card-color-white' | 'card-color-magenta' | 'card-color-blue';
export type CardTitleSize =
  | 'card__title-size-xs'
  | 'card__title-size-small'
  | 'card__title-size-medium'
  | 'card__title-size-large';
export type CardProps = CardMainProps & (CardNonImageProps | CardImageProps);
export type CardTextProps = Pick<CardMainProps, 'text'>;
export type CardTitleProps = Pick<CardMainProps, 'title' | 'titleSize'>;
export type CardContentProps = Omit<
  CardProps,
  'cardLink' | 'onClick' | 'theme' | 'key' | 'clickable'
>;
