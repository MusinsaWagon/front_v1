import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchDetail } from '../../apis/search/axios';
import styled from 'styled-components';
import ItemList from '../../components/ItemList/ItemList';

type SearchParams = {
  brand?: string;
  keyword?: string;
};
type ProductType = {
  productNumber: number;
  name: string;
  brand: string;
  starScore: number;
  reviewCount: number;
  likeCount: number;
  imgUrl: string;
  shopType: string;
  currentPrice: number;
  previousPrice: number;
};
const SearchDetail = () => {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get('brand');
  const keyword = searchParams.get('keyword');
  const isBrandPage = !!brand && !keyword;
  const [dataList, setDataList] = useState<ProductType[] | undefined>();

  const props = {
    ...(brand && { brand }),
    ...(keyword && { keyword }),
  };
  useEffect(() => {
    const fetchData = async (params: SearchParams) => {
      const response = await getSearchDetail(params);
      console.log(response);
      setDataList(response || []);
    };
    fetchData(props);
  }, []);
  return (
    <Container>
      <TopBox>{isBrandPage ? '브랜드' : '키워드'}</TopBox>
      <BottomBox>
        <ItemList datas={dataList} />
      </BottomBox>
    </Container>
  );
};

export default SearchDetail;

const Container = styled.div`
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
`;
const TopBox = styled.div`
  height: 100px;
`;
const BottomBox = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 23px 23px 0 0;
`;
