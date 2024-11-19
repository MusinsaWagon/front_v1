import styled from 'styled-components';

const Category = () => {
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

  // const rows = [];
  // for (let i = 0; i < categories.length; i += 3) {
  //   rows.push(categories.slice(i, i + 3));
  // }

  return (
    <Container>
      <Title>CostFlower</Title>
      <StyledTable>
        {categories.map((category, index) => (
          <CellBtn key={index}>{category}</CellBtn>
        ))}
      </StyledTable>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% + 44px);
  /* width: 100%; */
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
