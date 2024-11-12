import styled from 'styled-components';
import { COLORS } from '../../constant/theme';

interface PriceInfoProps {
  prevPrice: number;
  curPrice: number;
}

export default function PriceInfo({ prevPrice, curPrice }: PriceInfoProps) {
  const isPriceUp = prevPrice > curPrice ? false : true;
  const fluctPrice = Math.abs(prevPrice - curPrice);
  const fluctRate = Math.abs(((curPrice - prevPrice) / prevPrice) * 100);

  return (
    <Container>
      <Fluctuation $isPriceUp={isPriceUp}>
        <div />
        <div>
          <span>
            {isPriceUp ? '+' : '-'} {fluctRate.toFixed(1)} %
          </span>
          <span>
            {isPriceUp ? '+' : '-'} ￦ {fluctPrice}
          </span>
        </div>
      </Fluctuation>
      <Price>
        <span>현재가</span>
        <div>
          <span>￦ {prevPrice}</span>
          <span>￦ {curPrice}</span>
        </div>
      </Price>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
`;

const Fluctuation = styled.div<{ $isPriceUp: boolean }>`
  width: 35.38%;
  box-shadow: inset 0 0 0 2px
    ${({ $isPriceUp }) => ($isPriceUp ? COLORS.green : COLORS.red)};
  border-radius: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 10px 3.48%;
  box-sizing: border-box;
  justify-content: space-between;

  div:first-child {
    width: 0;
    height: 0;
    border-left: 9.25px solid transparent;
    border-right: 9.25px solid transparent;
    border-bottom: 9.25px solid
      ${({ $isPriceUp }) => ($isPriceUp ? COLORS.green : COLORS.red)};
    transform: ${({ $isPriceUp }) => ($isPriceUp ? '' : 'rotate(180deg)')};
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: bold;
    gap: 7px 0;
    color: ${({ $isPriceUp }) => ($isPriceUp ? COLORS.green : COLORS.red)};
  }
`;

const Price = styled.div`
  width: 44.64%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  span:first-child {
    font-weight: bold;
    font-size: 10px;
    color: rgba(12, 12, 12, 0.5);
    letter-spacing: 1px;
  }

  div:last-child {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: flex-end;
    gap: 10px 0;

    span:first-child {
      font-weight: 800;
      font-size: 14px;
      text-decoration: line-through;
    }

    span:last-child {
      font-size: 23.64px;
      font-weight: 900;
    }
  }
`;
