import styled from 'styled-components';

interface LineHeaderProps {
  width: string;
}

export default function LineHeader({ width }: LineHeaderProps) {
  return (
    <ProdHeader>
      <span>[{'PRENDA'}]</span>
      <Line width={width} />
      <span>PRDA DENIM PATCH CREWNECK SHIRT</span>
      <label>￦ 39,900</label>
    </ProdHeader>
  );
}

export const ProdHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    color: #1d1d1d;
    width: 100%;
    text-align: left;
    font-size: 10px;
    font-weight: bold;
  }

  span:nth-last-child(2) {
    color: #0c0c0c;
    width: 100%;
    text-align: left;
    font-size: 10.81px;
    font-weight: 800;
    line-height: 130%;
  }

  label {
    margin-top: 9.43%;
    text-align: right;
    width: 100%;
    font-weight: 800;
    font-size: 14px;
    color: #0c0c0c;
  }
`;

export const Line = styled.div<{ width: string }>`
  height: 0.57px;
  background-color: rgba(0, 0, 0, 0.5);
  width: ${({ width }) => width};
  margin: 6px 0;
`;
