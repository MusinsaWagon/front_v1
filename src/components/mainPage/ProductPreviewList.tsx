import styled from 'styled-components';
import ProductSection from '..//../components/mainPage/products/ProductSection';
import { getData } from '../../apis/goodsData/axios';
import { useEffect, useState } from 'react';

const ProductPreviewList = () => {
  const [data, setData] = useState(null);
  const [alarmData, setAlarmData] = useState(null);
  const [popularData, setPopularData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      const alarmResponse = await getData('alarm');
      const pupularRes = await getData('popular');
      setData(response);
      setAlarmData(alarmResponse);
      setPopularData(pupularRes);
    }
    fetchData();
  }, []);
  return (
    <Container>
      <ProductSection datas={data} title="전체 상품" />
      <ProductSection datas={popularData} title="오늘의 인기 상품" />
      <ProductSection datas={alarmData} title="가격 변동 상품" />
      <ProductSection datas={popularData} title="알림 등록 상품" />
    </Container>
  );
};
const Container = styled.div`
  text-align: left;
  padding: 0 22px;
`;

export default ProductPreviewList;
