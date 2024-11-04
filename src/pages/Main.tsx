import styled from 'styled-components';
//constans
import { COLORS } from '../constant/theme';

//components
import SearchBox from '../components/mainPage/SearchBox';
import BrandsBox from '../components/mainPage/BrandsBox';
import ProductPreviewList from '../components/mainPage/ProductPreviewList';
//imgs
import musinsa from '../assets/images/musinsa.png';
import ably from '../assets/images/ably.png';
import zigzag from '../assets/images/zigzag.png';

//axios
import Inquiry from '../components/mainPage/Inquiry';

const MainPage = () => {
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
        <ProductPreviewList />
      </InnerContainer>
      <Inquiry />
    </Container>
  );
};
const Container = styled.div`
  background-color: ${COLORS.black};
  position: relative;
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
  background-color: ${COLORS.white};
  border-radius: 23px 23px 0 0;
  padding: 25px 22px 72px 22px;
  box-sizing: border-box;
`;

export default MainPage;
