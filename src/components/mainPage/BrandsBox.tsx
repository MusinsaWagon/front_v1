import styled from 'styled-components';
import { COLORS } from '../../constant/theme';

interface BrandsBoxProps {
  name: string;
  imgSrc?: string;
}

const BrandsBox: React.FC<BrandsBoxProps> = ({ name, imgSrc }) => {
  return (
    <Container>
      <BrandBtn>
        <BrandImg src={imgSrc} />
      </BrandBtn>
      <BrandName>{name}</BrandName>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const BrandBtn = styled.button`
  width: 66.5px;
  height: 64px;
  border-radius: 13px;
`;
const BrandImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;
const BrandName = styled.span`
  color: ${COLORS.white};
  font-size: 9px;
`;

export default BrandsBox;
