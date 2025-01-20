import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//component
import Item from './products/Item';
import Category from './Category';
import CategoryList from './categorys/subCategoryDrawer/CategoryList';

//데이터 fetch
import { getCategoryData } from '../../apis/goodsData/axios';
import { getBottomCategories } from '../../apis/\bcategory/axios';

//아이콘
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

//reducer
import {
  closeDrawer,
  setChoicedIdx,
} from '../../store/drawer/categoyDrawer.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
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

type categoryType = {
  id: number;
  categoryName: string;
};
const EntireProductList = () => {
  const [datas, setDatas] = useState<Product[] | null>(null);
  const [searchParams] = useSearchParams();
  const [categoryName, setCategoryName] = useState('전체');
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDrawerOpen = useSelector(
    (state: RootState) => state.categoryDrawer.isDrawerOpen
  );
  const categoryId = useSelector(
    (state: RootState) => state.categoryDrawer.categoryId
  );
  const [categories, setCategories] = useState<categoryType[]>([]);
  const dispatch = useDispatch();
  const category = Number(searchParams.get('category'));
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const response = await getCategoryData(category);
      const response2 = await getBottomCategories(category);
      setDatas(response);
      setCategoryName(response2.parentCateroyName);
      setCategories([
        { id: category, categoryName: '전체' },
        ...response2.categoryList,
      ]);
    }
    fetchData();
  }, [category]);

  useEffect(() => {
    async function fetchData() {
      const response = await getCategoryData(categoryId);
      setDatas(response);
    }
    fetchData();
  }, [categoryId]);
  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);

  const handleBackBtn = () => {
    dispatch(setChoicedIdx(0));
    navigate('/entire');
  };
  return (
    <Container>
      {category ? (
        <CategoryBox>
          <Title>
            <Left>
              <button className="entire_backBtn" onClick={handleBackBtn}>
                <IoIosArrowBack />
              </button>
              프라이스웨건
              <Icon>
                <IoIosArrowForward />
              </Icon>
              의류
              <Icon>
                <IoIosArrowForward />
              </Icon>
              <span>{categoryName}</span>
            </Left>
            {isDrawerOpen && (
              <button
                className="entire_upBtn"
                onClick={() => dispatch(closeDrawer())}
              >
                <IoIosArrowDropup />
              </button>
            )}
          </Title>
          <CategoryList categories={categories} />
        </CategoryBox>
      ) : (
        <Category setCategoryName={setCategoryName} />
      )}

      <ItemsContainer>
        {datas?.map((data) => (
          <Item key={data.productNumber} info={data} />
        ))}
        {isDrawerOpen && <Background></Background>}
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
  min-height: 300px;
  position: relative;
`;

const CategoryBox = styled.div``;

const Title = styled.h1`
  padding: 0 22px 12px 22px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #888888;
  gap: 3px;
  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark_black};
  }
  .entire_backBtn {
    background-color: transparent;
    display: flex;
    align-items: center;
    color: #888888;
    font-size: 1.3rem;
    font-weight: bold;
  }
  .entire_upBtn {
    display: flex;
    align-items: center;
    background-color: transparent;
    color: #888888;
    font-size: 1.3rem;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  * {
    color: #888888;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 25;
  background-color: rgba(30, 30, 30, 0.6);
`;

export default EntireProductList;
