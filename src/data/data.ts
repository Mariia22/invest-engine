import { CardProps } from '../components/Card/types';

export const cards: CardProps[] = [
  {
    key: 0,
    title: 'Follow leading global markets',
    text: 'Popular markets such as the S&P 500, the MSCI World of the FTSE 100',
    theme: 'blue',
    cardLink: 'www.google.com',
    imageLink: './../assets/images/icons.png',
    alt: 'FRONT_ICONS_2024',
    width: 132,
    height: 132,
  },
  {
    key: 1,
    title: 'Earn 5.12% Money market funds',
    text: 'Low-risk, flexible, easy-to-use funds, average interest rate 5.12%',
    theme: 'magenta',
    handleClick: () => console.log('here'),
    imageLink: './../assets/images/HEADER_MONEY_TANYA_01.png',
    alt: 'HEADER_MONEY',
    width: 132,
    height: 132,
  },
  {
    key: 2,
    title: 'Portfolios built for you',
    text: 'Fill in our simple questionaire, and our investment managers will build and manage a low-cost portfolio that suits you',
    theme: 'white',
    cardLink: 'www.google.com',
    imageLink: './../assets/images/PRO.png',
    alt: 'PRO',
    width: 132,
    height: 132,
  },
];
