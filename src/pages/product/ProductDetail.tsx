import styled from 'styled-components';
import DetailBody from '../../components/productDetail/DetailBody';
import ProductImage from '../../components/productDetail/ProductImage';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { getProduct } from '../../hooks/productDetail/getProductDetail';
import Loading from '../../components/common/Loading';

export default function ProductDetail() {
  const { id } = useParams();
  const params = new URLSearchParams(useLocation().search);
  const site = params.get('site') || '';

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(site, id),
    staleTime: 1000 * 5 * 60,
  });

  return isLoading ? (
    <Loading />
  ) : error ? (
    <div>Error loading product</div>
  ) : (
    <PageWrapper>
      <ProductImage url={data.basicProductInfo.imgUrl} />
      <DetailBody
        productDetail={data.productDetail}
        parentAndChildCategoryDTO={data.parentAndChildCategoryDTO}
        basicProductInfo={data.basicProductInfo}
        productHistoryList={data.productHistoryList}
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;
