import styled from 'styled-components';
import { TopCategoryType } from '../types/categories';
import { useState } from 'react';

interface TopCategoryProps {
  categories: TopCategoryType[];
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}
const TopCategory: React.FC<TopCategoryProps> = ({
  categories,
  setSelectedId,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectCategory = (idx: number) => {
    setSelectedIdx(idx);
    setSelectedId(categories[idx].id);
  };

  return (
    <Container>
      {categories.map((category, idx) => (
        <Cagetory
          key={category.id}
          $selected={idx === selectedIdx}
          onClick={() => selectCategory(idx)}
        >
          {category.categoryName}
        </Cagetory>
      ))}
    </Container>
  );
};

export default TopCategory;

interface CategoryProps {
  $selected: boolean;
}
const Container = styled.div`
  width: 30%;
  color: white;
  overflow-y: auto;
  padding-bottom: 100px;
  background-color: ${({ theme }) => theme.colors.dark_black};
`;
const Cagetory = styled.div<CategoryProps>`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 0.7rem;
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.colors.black : theme.colors.dark_black};
`;
