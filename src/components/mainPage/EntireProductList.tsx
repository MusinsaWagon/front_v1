import styled from 'styled-components';

//component
import Item from './products/Item';
import Category from './Category';
import { useEffect, useState } from 'react';
import { getCategoryData } from '../../apis/goodsData/axios';
import { useSearchParams } from 'react-router-dom';
interface Product {
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
}

const EntireProductList = () => {
  const [datas, setDatas] = useState<Product[] | null>(null);
  const [searchParams] = useSearchParams();
  const category = Number(searchParams.get('category')) || 0;

  useEffect(() => {
    async function fetchData() {
      const response = await getCategoryData(category);
      setDatas(response);
    }
    fetchData();
  }, [category]);
  return (
    <Container>
      <Category />
      <ItemsContainer>
        {datas?.map((data) => (
          <Item key={data.productNumber} info={data} />
        ))}
      </ItemsContainer>
    </Container>
  );
};
const Container = styled.div`
  text-align: left;
  width: 100%;
`;
const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;

export default EntireProductList;
