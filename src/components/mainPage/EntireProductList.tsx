import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//component
import Item from './products/Item';
import Category from './Category';
import CategoryList from './categorys/subCategoryDrawer/CategoryList';

//데이터 fetch
import { getCategoryData } from '../../apis/goodsData/axios';

//아이콘
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';

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
  const [categoryName, setCategoryName] = useState('전체');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const category = Number(searchParams.get('category'));

  useEffect(() => {
    async function fetchData() {
      const response = await getCategoryData(category);
      setDatas(response);
    }
    fetchData();
  }, [category]);

  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <Container>
      {category ? (
        <CategoryBox>
          <Title>
            프라이스웨건
            <Icon>
              <IoIosArrowForward />
            </Icon>
            의류
            <Icon>
              <IoIosArrowForward />
            </Icon>
            <span>{categoryName}</span>
            {isDrawerOpen && (
              <button onClick={() => setIsDrawerOpen(false)}>
                <IoIosArrowDropup />
              </button>
            )}
          </Title>
          <CategoryList
            setCategoryName={setCategoryName}
            setIsDrawerOpen={setIsDrawerOpen}
            isDrawerOpen={isDrawerOpen}
          />
        </CategoryBox>
      ) : (
        <Category />
      )}

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
  padding: 25px 22px 0 22px;
`;

const CategoryBox = styled.div``;

const Title = styled.h1`
  padding: 0 22px 12px 22px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  color: #888888;
  gap: 3px;
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark_black};
  }
`;
const Icon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  * {
    color: #888888;
  }
`;
export default EntireProductList;
