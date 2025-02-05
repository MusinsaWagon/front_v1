import styled from 'styled-components';
import { MainContainer } from '../../styles/mainContainer';
import SearchBox from '../mainPage/SearchBox';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { searchListHandler } from '../../apis/search/axios';
import { IoIosArrowForward } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import History from './History';
// import isPWAActive from '../../hooks/detectPWA/useIsPWA';
interface DrawerProps {
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
type SearchParams = {
  brand?: string;
  keyword?: string;
};

//검색기록 타입
interface Keyword {
  id: number;
  text: string;
}
const SearchModal: React.FC<DrawerProps> = ({
  setIsDrawerVisible,
  setIsSearchVisible,
}) => {
  const isStandalone = !window.matchMedia('(display-mode: standalone)').matches;
  const [searchCont, setSearchCont] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [brands, setBrands] = useState([]);
  const [keywords, setKeywords] = useState<string[]>([]);
  // const isPWA=isPWAActive();

  const navigate = useNavigate();
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
          setKeywords([debouncedValue, ...data.relatedKeywords]);
          setBrands(data.relatedBrands);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchSearchResults();
  }, [debouncedValue]);

  const handleBtnClick = async (params: SearchParams) => {
    const { brand, keyword } = params;
    const queryObject = {
      ...(brand && { brand }),
      ...(keyword && { keyword }),
    };
    const queryString = new URLSearchParams(queryObject).toString();
    setIsSearchVisible(false);
    navigate(`/search/detail?${queryString}`);
  };

  //검색 기록 핸들러
  const [beforeKeywords, setbeforeKeywords] = useState<Keyword[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );

  //검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = beforeKeywords.filter((thisKeyword: Keyword) => {
      return thisKeyword.id !== id;
    });
    setbeforeKeywords(nextKeyword);
  };

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setbeforeKeywords([]);
    localStorage.setItem('keywords', JSON.stringify([]));
  };

  return (
    <MainContainer $isBrowser={isStandalone}>
      <Container>
        <TopBox>
          <SearchContainer>
            <Back onClick={() => setIsSearchVisible(false)}>
              <IoIosArrowBack />
            </Back>
            <SearchBox
              setIsDrawerVisible={setIsDrawerVisible}
              renderedPage="search"
              setSearchCont={setSearchCont}
              placeholderText="원하는 상품, 브랜드 검색"
              setIsSearchVisible={setIsSearchVisible}
            />
          </SearchContainer>
          {beforeKeywords.length > 0 && (
            <History
              beforeKeywords={beforeKeywords}
              onClearKeywords={handleClearKeywords}
              onRemoveKeyword={handleRemoveKeyword}
              setIsSearchVisible={setIsSearchVisible}
            />
          )}
        </TopBox>
        <BottomBox>
          <ContsBox className="brands_ContBox">
            {brands.map((brand, idx) => (
              <BrandBtn key={idx} onClick={() => handleBtnClick({ brand })}>
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
            {keywords.map((keyword, idx) => (
              <KeywordBtn
                key={idx}
                onClick={() =>
                  idx === 0
                    ? handleBtnClick({ keyword: debouncedValue })
                    : handleBtnClick({
                        brand: keyword,
                        keyword: debouncedValue,
                      })
                }
              >
                <SearchIcon>
                  <IoSearch />
                </SearchIcon>
                {idx !== 0 && keyword} {debouncedValue}
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
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchContainer = styled.div`
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
