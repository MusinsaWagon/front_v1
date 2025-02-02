import styled from 'styled-components';
import { MainContainer } from '../../styles/mainContainer';
import SearchBox from '../mainPage/SearchBox';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { searchListHandler } from '../../apis/search/axios';
import { IoIosArrowForward } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
interface DrawerProps {
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<DrawerProps> = ({
  setIsDrawerVisible,
  setIsSearchVisible,
}) => {
  const isStandalone = !window.matchMedia('(display-mode: standalone)').matches;
  const [searchCont, setSearchCont] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [brands, setBrands] = useState([]);
  const [kewords, setKewords] = useState([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchCont);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchCont]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (debouncedValue) {
        try {
          const data = await searchListHandler({ name: debouncedValue });
          setKewords(data.relatedKeywords);
          setBrands(data.relatedBrands);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchSearchResults();
  }, [debouncedValue]);

  useEffect(() => {
    console.log('brands:', brands);
    console.log('keword:', kewords);
  }, [brands, kewords]);

  return (
    <MainContainer $isBrowser={isStandalone}>
      <Container>
        <TopBox>
          <Back onClick={() => setIsSearchVisible(false)}>
            <IoIosArrowBack />
          </Back>
          <SearchBox
            setIsDrawerVisible={setIsDrawerVisible}
            renderedPage="search"
            setSearchCont={setSearchCont}
          />
        </TopBox>
        <BottomBox>
          <ContsBox className="brands_ContBox">
            {brands.map((brand, idx) => (
              <BrandBtn key={idx}>
                <LeftBox>
                  <img />
                  <span className="search__brand_name">
                    <span>{brand}</span>{' '}
                    <span className="search__fixed_cont">브랜드</span>
                  </span>
                </LeftBox>
                <IoIosArrowForward />
              </BrandBtn>
            ))}
          </ContsBox>
          <ContsBox>
            {kewords.map((keword, idx) => (
              <KeywordBtn key={idx}>
                <SearchIcon>
                  <IoSearch />
                </SearchIcon>
                {keword} {debouncedValue}
              </KeywordBtn>
            ))}
          </ContsBox>
        </BottomBox>
      </Container>
    </MainContainer>
  );
};

export default SearchModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 110vh;
  width: 100%;
  position: absolute;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  left: 0;
  padding: 20px 0 30px 0;
  box-sizing: border-box;
`;
const TopBox = styled.div`
  padding: 13px 22px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Back = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: white;
  margin-right: 12px;
  font-size: 20px;
`;
const BottomBox = styled.div`
  padding: 10px;
  color: white;
  height: 53vh;
  overflow: auto;
`;
const ContsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: auto;
`;
const BrandBtn = styled.button`
  color: white;
  background-color: transparent;
  padding: 0 22px 15px 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    background-color: gray;
    border-radius: 50%;
  }
  &:last-child {
    border-bottom: 1px solid #4f4f4f;
  }
`;
const LeftBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .search__brand_name {
    display: flex;
    font-size: 0.9rem;
  }
  .search__fixed_cont {
    background-color: rgba(217, 217, 217, 0.2);
    font-size: 0.5rem;
    border-radius: 3px;
    padding: 2px 4px;
    color: rgba(255, 255, 255, 0.6);
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
`;

//키워드
const KeywordBtn = styled.button`
  background-color: transparent;
  padding: 7.5px 22px;
  color: white;
  display: flex;
  align-items: center;
  gap: 5%;
  font-size: 0.9rem;
  border-bottom: 1px solid #4f4f4f;
`;

const SearchIcon = styled.span`
  color: rgba(255, 255, 255, 0.6);
  background-color: #424242;
  border-radius: 50%;
  padding: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
