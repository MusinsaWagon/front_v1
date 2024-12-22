import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Category = () => {
  const navigate = useNavigate();
  const categories = [
    '전체',
    '상의',
    '아우터',
    '바지',
    '원피스/스커트',
    '신발',
    '가방',
    '패션소품',
    '뷰티',
  ];
  const getActiveCategory = (index: number) => {
    navigate(`/entire?category=${index}`);
  };

  return (
    <Container>
      <Title>CostFlower</Title>
      <StyledTable>
        {categories.map((category, index) => (
          <CellBtn key={index} onClick={() => getActiveCategory(index)}>
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
