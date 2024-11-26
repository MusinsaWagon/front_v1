import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/categories/categories.slice';
import { useEffect } from 'react';

import { RootState } from '../../store/store';
const Category = () => {
  const category = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();
  const categories = [
    '전체',
    '상의',
    '팬츠',
    '원피스',
    '아우터',
    '스커트',
    '슈즈',
    '가방',
    '이너웨어/잠옷',
    '주얼리',
  ];
  const getActiveCategory = (category: string) => {
    dispatch(setActiveCategory(category));
  };
  useEffect(() => {
    console.log(category);
  }, [category]);
  return (
    <Container>
      <Title>CostFlower</Title>
      <StyledTable>
        {categories.map((category, index) => (
          <CellBtn key={index} onClick={() => getActiveCategory(category)}>
            {category}
          </CellBtn>
        ))}
      </StyledTable>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% + 44px);
  margin: auto;
  box-sizing: border-box;
  margin-bottom: 15px;
  position: relative;
  right: 22px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

const StyledTable = styled.table`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const CellBtn = styled.button`
  height: 100%;
  padding: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  border: 1px solid #e0e0e0;
  background-color: transparent;
  &:hover {
    background-color: #e0e0e0;
  }
`;

export default Category;
