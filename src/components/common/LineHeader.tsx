import styled from 'styled-components';
import { COLORS } from '../../constant/theme';
import Review from '../productDetail/Review';

interface LineHeaderProps {
  width: string;
  lineWidth: string;
  padding?: string;
  msg: string;
  msg2: string;
  price?: number;
  saleRate?: number | null;
  review?: number[];
}

export default function LineHeader({
  width,
  lineWidth,
  padding,
  saleRate,
  msg,
  msg2,
  price,
  review,
}: LineHeaderProps) {
  const isFullWidth = width === '100%';

  return (
    <ProdHeader width={width} $padding={padding}>
      <TitleWrapper>
        <span>[{msg}]</span>
        {review && <Review review={review} />}
      </TitleWrapper>
      <Line $lineWidth={lineWidth} />
      <span>{msg2}</span>
      {price && (
        <PriceWrapper $isFullWidth={isFullWidth} saleRate={saleRate}>
          {saleRate && (
            <SaleInfo>
              <div />
              <span>{saleRate} %</span>
            </SaleInfo>
          )}
          <Price $isFullWidth={isFullWidth} saleRate={saleRate}>
            <label>현재가</label>
            <label>￦ {price}</label>
          </Price>
        </PriceWrapper>
      )}
    </ProdHeader>
  );
}

const ProdHeader = styled.div<{ width: string; $padding?: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => width};
  padding: ${({ $padding }) => $padding};

  span:nth-child(3) {
    height: 28.11px;
    color: #0c0c0c;
    width: 100%;
    text-align: left;
    font-size: 10.81px;
    font-weight: 800;
    line-height: 130%;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  span:first-child {
    color: #1d1d1d;
    width: 100%;
    text-align: left;
    font-size: 10px;
    font-weight: bold;
  }
`;

const Line = styled.div<{ $lineWidth: string }>`
  height: 0.57px;
  background-color: rgba(0, 0, 0, 0.5);
  width: ${({ $lineWidth }) => $lineWidth};
  margin: 6px 0;
`;

const PriceWrapper = styled.div<{
  $isFullWidth: boolean;
  saleRate?: number | null;
}>`
  height: 25px;
  display: flex;
  width: 100%;
  align-items: end;
  justify-content: ${({ $isFullWidth, saleRate }) =>
    $isFullWidth ? 'flex-end' : saleRate ? 'space-between' : 'flex-start'};
`;

const SaleInfo = styled.div`
  width: 62px;
  height: 16px;
  background-color: ${COLORS.red};
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.94px;

  & > div {
    width: 0;
    height: 0;
    border-left: 3.32px solid transparent;
    border-right: 3.32px solid transparent;
    border-bottom: 5.75px solid white;
    transform: rotate(180deg);
  }

  span {
    font-size: 11px;
    font-weight: 800;
    color: white;
  }
`;

const Price = styled.div<{ $isFullWidth: boolean; saleRate?: number | null }>`
  display: flex;
  align-items: end;
  flex-direction: ${({ $isFullWidth, saleRate }) =>
    $isFullWidth || saleRate ? 'column' : 'row'};
  gap: 6px;

  & > label {
    color: #0c0c0c;
    text-align: right;
  }

  & > label:first-child {
    font-size: 6px;
    line-height: 8px;
    font-weight: bold;
    color: rgba(12, 12, 12, 0.5);
  }

  & > label:last-child {
    font-weight: 800;
    font-size: 14px;
  }
`;
