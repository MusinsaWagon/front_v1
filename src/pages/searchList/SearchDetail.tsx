import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

//fetch
import { getSearchDetail } from '../../apis/search/axios';

//conponents
import ItemList from '../../components/ItemList/ItemList';
import SearchBox from '../../components/mainPage/SearchBox';
import SearchModal from '../../components/search/SearchModal';
import CategoryDrawer from '../../components/mainPage/categorys/CategoryDrawer';
//icons
import { IoIosArrowBack } from 'react-icons/io';
import { ProductDetail } from '../../apis/productDetail/getProductDetail';

type SearchParams = {
  brand?: string;
  keyword?: string;
};

const SearchDetail = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get('brand');
  const keyword = searchParams.get('keyword');
  const isBrandPage = !!brand && !keyword;
  const [dataList, setDataList] = useState<ProductDetail[] | undefined>();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const props = {
    ...(brand && { brand }),
    ...(keyword && { keyword }),
  };

  const text = `${brand || ''} ${keyword || ''}`.trim();

  useEffect(() => {
    const fetchData = async (params: SearchParams) => {
      const response = await getSearchDetail(params);
      setDataList(response || []);
    };
    fetchData(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, keyword]);

  return (
    <Container>
      <TopBox>
        <Back onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </Back>
        {isBrandPage ? (
          <LeftBox>
            {brand}
            <span>MUSINSA</span>
          </LeftBox>
        ) : (
          <SearchBox
            renderedPage="main"
            onClick={() => setIsSearchVisible(true)}
            setIsDrawerVisible={setIsDrawerVisible}
            placeholderText={text}
            setIsSearchVisible={setIsSearchVisible}
          />
        )}
      </TopBox>
      <BottomBox>
        <ItemList datas={dataList} />
      </BottomBox>

      <CategoryDrawer
        $isVisible={isDrawerVisible}
        setIsDrawerVisible={setIsDrawerVisible}
      />

      {isSearchVisible && (
        <SearchModal
          setIsDrawerVisible={setIsDrawerVisible}
          setIsSearchVisible={setIsSearchVisible}
        />
      )}
    </Container>
  );
};

export default SearchDetail;

const Container = styled.div`
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  position: relative;
`;
const TopBox = styled.div`
  /* height: 80px; */
  display: flex;
  align-items: center;
  padding: 28px 22px;
  box-sizing: border-box;
`;
const BottomBox = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 23px 23px 0 0;
`;

const LeftBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 5px;
  span {
    border-radius: 2px;
    font-size: 0.5rem;
    background-color: rgba(217, 217, 217, 0.6);
    padding: 2px 5px;
    color: rgba(255, 255, 255, 0.6);
  }
`;
const Back = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: white;
  margin-right: 12px;
  font-size: 20px;
`;
