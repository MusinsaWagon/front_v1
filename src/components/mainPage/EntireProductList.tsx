import styled from 'styled-components';

//component
import Item from './products/Item';
import Category from './Category';

import { useEffect, useState } from 'react';

import { getData } from '../../apis/axios';

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
  useEffect(() => {
    async function fetchData() {
      const response = await getData();
      console.log('red:', response);
      setDatas(response);
    }
    fetchData();
  }, []);
  return (
    <Container>
      <Category />
      <ItemsContainer>
        {datas?.map((data) => (
          <Item info={data} />
        ))}
      </ItemsContainer>
      <More>
        <Arrow />
      </More>
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
const More = styled.button``;
const Arrow = styled.img``;
export default EntireProductList;
