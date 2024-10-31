import styled from 'styled-components';

import { COLORS } from '../constant/theme';

import SearchBox from '../components/mainPage/SearchBox';
import BrandsBox from '../components/mainPage/BrandsBox';

import musinsa from '../assets/images/musinsa.png';
import ably from '../assets/images/ably.png';
import zigzag from '../assets/images/zigzag.png';

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
      <InnerContainer></InnerContainer>
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
`;

export default MainPage;
