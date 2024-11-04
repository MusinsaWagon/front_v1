import styled from 'styled-components';

interface LineHeaderProps {
  width: string;
  lineWidth: string;
  padding?: string;
  msg: string;
  msg2: string;
  price: number;
  saleRate?: number | null;
}

export default function LineHeader({
  width,
  lineWidth,
  padding,
  saleRate,
  msg,
  msg2,
  price,
}: LineHeaderProps) {
  return (
    <ProdHeader width={width} $padding={padding}>
      <span>[{msg}]</span>
      <Line $lineWidth={lineWidth} />
      <span>{msg2}</span>
      <label>￦ {price}</label>
    </ProdHeader>
  );
}

export const ProdHeader = styled.div<{ width: string; $padding?: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => width};
  padding: ${({ $padding }) => $padding};

  span:first-child {
    color: #1d1d1d;
    width: 100%;
    text-align: left;
    font-size: 10px;
    font-weight: bold;
  }

  span:nth-last-child(2) {
    height: 28.11px;
    color: #0c0c0c;
    width: 100%;
    text-align: left;
    font-size: 10.81px;
    font-weight: 800;
    line-height: 130%;
  }

  label {
    margin-top: 10px;
    text-align: right;
    width: 100%;
    font-weight: 800;
    font-size: 14px;
    color: #0c0c0c;
  }
`;

export const Line = styled.div<{ $lineWidth: string }>`
  height: 0.57px;
  background-color: rgba(0, 0, 0, 0.5);
  width: ${({ $lineWidth }) => $lineWidth};
  margin: 6px 0;
`;
