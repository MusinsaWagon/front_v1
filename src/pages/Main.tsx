import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

//components
import SearchBox from '../components/mainPage/SearchBox';
import BrandsBox from '../components/mainPage/BrandsBox';
import ProductPreviewList from '../components/mainPage/ProductPreviewList';
import EntireProductList from '../components/mainPage/EntireProductList';

//drawer
import CategoryDrawer from '../components/mainPage/categorys/CategoryDrawer';

//SearchModal
import SearchModal from '../components/search/SearchModal';

//imgs
import musinsa from '../assets/images/musinsa.png';
import ably from '../assets/images/ably.png';
import zigzag from '../assets/images/zigzag.png';

//axios
import Inquiry from '../components/mainPage/Inquiry';

const MainPage: React.FC = () => {
  const location = useLocation().pathname;
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);

  useEffect(() => {
    if (isDrawerVisible || isSearchVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerVisible, isSearchVisible]);

  useEffect(() => {
    console.log('');
  }, [isDrawerVisible]);
  return (
    <Outer>
      <Container isScrollable={!isDrawerVisible && !isSearchVisible}>
        <TopBox>
          <SearchBox
            setIsDrawerVisible={setIsDrawerVisible}
            renderedPage="main"
            onClick={() => setIsSearchVisible(true)}
          />
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
      {/* {isDrawerVisible && ( */}
      <CategoryDrawer
        $isVisible={isDrawerVisible}
        setIsDrawerVisible={setIsDrawerVisible}
      />
      {/* )} */}
      {isSearchVisible && (
        <SearchModal
          setIsDrawerVisible={setIsDrawerVisible}
          setIsSearchVisible={setIsSearchVisible}
        />
      )}
    </Outer>
  );
};

const Outer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div<{ isScrollable: boolean }>`
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  height: 100dvh;
  overflow-y: ${({ isScrollable }) => (isScrollable ? 'auto' : 'hidden')};
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
