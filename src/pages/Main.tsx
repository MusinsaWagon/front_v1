import styled from 'styled-components';
import { useEffect, useState } from 'react';
//constans
import { COLORS } from '../constant/theme';

//components
import SearchBox from '../components/mainPage/SearchBox';
import BrandsBox from '../components/mainPage/BrandsBox';
import ProductSection from '../components/mainPage/products/ProductSection';

//imgs
import musinsa from '../assets/images/musinsa.png';
import ably from '../assets/images/ably.png';
import zigzag from '../assets/images/zigzag.png';

//axios
import { getData } from '../apis/axios';

const MainPage = () => {
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
      <TopBox>
        <SearchBox />
        <BrandsContainer>
          <BrandsBox imgSrc={musinsa} name="ALL" />
          <BrandsBox imgSrc={musinsa} name="MUSINSA" />
          <BrandsBox imgSrc={zigzag} name="ZIGZAG" />
          <BrandsBox imgSrc={ably} name="ABLY" />
        </BrandsContainer>
      </TopBox>
      <InnerContainer>
        <ProductSection datas={data} title="전체 상품" />
        <ProductSection datas={data} title="오늘의 인기 상품" />
      </InnerContainer>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${COLORS.black};
`;
const TopBox = styled.div`
  padding: 13px 22px;
`;
const BrandsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0;
`;
const InnerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.white};
  border-radius: 23px 23px 0 0;
  padding: 25px 22px;
  box-sizing: border-box;
`;

export default MainPage;
