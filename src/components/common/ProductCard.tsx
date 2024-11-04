import styled from 'styled-components';
import Image from './Image';
import LineHeader from './LineHeader';

interface ProductCardProps {
  label?: string;
  saleRate?: number;
}

export default function ProductCard({ label, saleRate }: ProductCardProps) {
  return (
    <CardWrapper>
      {label && <label>{label}</label>}
      <Card>
        <Image width="29.69%" aspectRatio="95/90" src="" />
        <LineHeader
          width="62.28%"
          lineWidth="100%"
          msg="PRENDA"
          msg2="PRDA DENIM PATCH CREWNECK SHIRT"
          price={39800}
          saleRate={saleRate || null}
        />
      </Card>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px 0;

  & > label {
    width: 100%;
    text-align: left;
    letter-spacing: 0.225px;
    font-weight: bold;
    font-size: 6px;
    color: rgba(12, 12, 12, 0.5);
  }
`;

const Card = styled.div`
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 334/98;
  border-color: #cfcfcf;
  display: flex;
  padding: 4px;
  gap: 5.31%;
  align-items: center;
`;
