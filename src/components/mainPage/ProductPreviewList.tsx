import styled from 'styled-components';
import ProductSection from '..//../components/mainPage/products/ProductSection';
import { getData } from '../../apis/goodsData/axios';
import { useEffect, useState } from 'react';

const ProductPreviewList = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      console.log('red:', response);
      setData(response);
    }
    fetchData();
  }, []);
  return (
    <Container>
      <ProductSection datas={data} title="전체 상품" />
      <ProductSection datas={data} title="오늘의 인기 상품" />
      <ProductSection datas={data} title="가격 변동 상품" />
      <ProductSection datas={data} title="오늘의 인기 상품" />
    </Container>
  );
};
const Container = styled.div`
  text-align: left;
`;

export default ProductPreviewList;
