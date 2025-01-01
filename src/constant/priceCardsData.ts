import { useTheme } from 'styled-components';

export default function PriceCardsData() {
  const theme = useTheme();

  const cards = [
    {
      type: '역대 최저가',
      src: '/images/lowestPrice.png',
      color: theme.colors.red,
    },
    {
      type: '평균가',
      src: '/images/currentPrice.png',
      color: theme.colors.black,
    },
    {
      type: '역대 최고가',
      src: '/images/highestPrice.png',
      color: theme.colors.green,
    },
  ];

  return cards;
}
