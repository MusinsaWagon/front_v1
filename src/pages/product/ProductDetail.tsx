import styled from 'styled-components';
import DetailBody from '../../components/productDetail/DetailBody';
import ProductImage from '../../components/productDetail/ProductImage';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../hooks/productDetail/getProductDetail';
import { Suspense } from 'react';
import Loading from '../../components/common/Loading';

export default function ProductDetail() {
  const { id } = useParams();
  const { data } = useSuspenseQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct('MUSINSA', id),
    staleTime: 1000 * 5 * 60,
  });

  return (
    <Suspense fallback={<Loading />}>
      <PageWrapper>
        <ProductImage url={data.basicProductInfo.imgUrl} />
        <DetailBody
          productDetail={data.productDetail}
          parentAndChildCategoryDTO={data.parentAndChildCategoryDTO}
          basicProductInfo={data.basicProductInfo}
          productHistoryList={data.productHistoryList}
        />
      </PageWrapper>
    </Suspense>
  );
}

const PageWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
`;
