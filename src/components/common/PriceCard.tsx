import styled from 'styled-components';
import { COLORS } from '../../constant/theme';

interface PriceCardProps {
  aspectRatio: string;
  marginTop?: string;
  marginBottom?: string;
  priceList: number[];
}

export default function PriceCard({
  aspectRatio,
  marginTop,
  marginBottom,
  priceList,
}: PriceCardProps) {
  const cards = [
    {
      type: '역대 최저가',
      src: '/images/lowestPrice.png',
      color: COLORS.red,
    },
    {
      type: '평균가',
      src: '/images/currentPrice.png',
      color: COLORS.font_black,
    },
    {
      type: '역대 최고가',
      src: '/images/highestPrice.png',
      color: COLORS.green,
    },
  ];

  return (
    <CardWrapper
      $marginBottom={marginBottom}
      $marginTop={marginTop}
      $aspectRatio={aspectRatio}
    >
      <Cards>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <img src={card.src} />
              <span>{card.type}</span>
            </CardHeader>
            <span style={{ color: card.color }}>
              ￦{' '}
              {priceList[index].toLocaleString('ko-KR', {
                minimumFractionDigits: 0,
              })}
            </span>
          </Card>
        ))}
      </Cards>
    </CardWrapper>
  );
}

const CardWrapper = styled.div<{
  $aspectRatio: string;
  $marginTop?: string;
  $marginBottom?: string;
}>`
  width: 100%;
  padding: 6px 0;
  ${({ $aspectRatio }) => 'aspect-ratio:' + $aspectRatio};
  ${({ $marginTop }) => 'margin-top:' + $marginTop};
  ${({ $marginBottom }) => 'margin-bottom:' + $marginBottom};
  box-sizing: border-box;

  border: 1px solid #cfcfcf;
  border-radius: 11.16px;
  box-shadow: 0 0 7.44px 0 rgba(0, 0, 0, 0.05);
`;

const Cards = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
`;
const Card = styled.div`
  width: 33.43%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px 0;

  &:nth-child(2) {
    border-width: 0 0.47px;
    border-color: #cfcfcf;
    border-style: solid;
  }

  & > span {
    font-size: 11px;
    font-weight: bold;
  }
`;

const CardHeader = styled.div`
  width: 51%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.88%;
  white-space: nowrap;

  img {
    width: 20.35%;
    aspect-ratio: 1/1;
  }

  & > span {
    font-size: 8px;
    font-weight: bold;
    letter-spacing: 0.16px;
    color: rgba(12, 12, 12, 0.5);
  }
`;
