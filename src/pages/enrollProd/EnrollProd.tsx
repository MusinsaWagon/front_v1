import styled from 'styled-components';
import HeaderSection from '../../components/common/HeaderSection';
import BodySection from '../../components/enrollProd/BodySection';

interface EnrollProdProps {
  type: string;
}

export default function EnrollProd({ type }: EnrollProdProps) {
  return (
    <Wrapper>
      <HeaderSection type="product" />
      <BodySection type={type} />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: auto;
  padding: 4.15% 5.47%;
  box-sizing: border-box;
`;
