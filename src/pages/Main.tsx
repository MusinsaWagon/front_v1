import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

//components
import SearchBox from '../components/mainPage/SearchBox';
import BrandsBox from '../components/mainPage/BrandsBox';
import ProductPreviewList from '../components/mainPage/ProductPreviewList';
import EntireProductList from '../components/mainPage/EntireProductList';

//imgs
import musinsa from '../assets/images/musinsa.png';
import ably from '../assets/images/ably.png';
import zigzag from '../assets/images/zigzag.png';

//axios
import Inquiry from '../components/mainPage/Inquiry';

const MainPage = () => {
  const location = useLocation().pathname;
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
        {location === '/entire' ? (
          <EntireProductList />
        ) : (
          <ProductPreviewList />
        )}
      </InnerContainer>
      <Inquiry />
    </Container>
  );
};
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  padding-top: 20px;
  height: 100dvh;
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
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 23px 23px 0 0;
  padding: 25px 22px 50px 22px;
  box-sizing: border-box;
`;

export default MainPage;
