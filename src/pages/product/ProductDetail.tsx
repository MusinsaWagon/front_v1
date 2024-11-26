import styled from 'styled-components';
import DetailBody from '../../components/productDetail/DetailBody';
import ProductImage from '../../components/productDetail/ProductImage';
export default function ProductDetail() {
  return (
    <PageWrapper>
      <ProductImage />
      <DetailBody />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;
