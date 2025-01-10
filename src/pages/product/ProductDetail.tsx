import styled from 'styled-components';
import DetailBody from '../../components/productDetail/DetailBody';
import ProductImage from '../../components/productDetail/ProductImage';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import { getProduct } from '../../apis/productDetail/getProductDetail';
import Loading from '../../components/common/Loading';

export default function ProductDetail() {
  const { id } = useParams();
  const params = new URLSearchParams(useLocation().search);
  const site = params.get('site') || '';

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(site, id),
    staleTime: 1000 * 5 * 60,
    refetchOnWindowFocus: false,
  });

  return isLoading ? (
    <Loading />
  ) : error ? (
    <div>Error loading product</div>
  ) : (
    <PageWrapper>
      <ProductImage
        isLiked={data.basicProductInfo.isLiked}
        url={data.basicProductInfo.imgUrl}
        id={id}
      />
      <DetailBody
        productDetail={data.productDetail}
        parentAndChildCategoryDTO={data.parentAndChildCategoryDTO}
        basicProductInfo={data.basicProductInfo}
        productHistoryList={data.productHistoryLists}
        imgSrc={data.basicProductInfo.imgUrl}
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;
