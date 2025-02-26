import styled from 'styled-components';

import { RootState } from '../../../../store/store';
import {
  closeDrawer,
  setChoicedIdx,
  setCategoryId,
} from '../../../../store/drawer/categoyDrawer.slice';
import { useSelector, useDispatch } from 'react-redux';

type SubCategoryDrawerProps = {
  categories: categoryType[];
};

type categoryType = {
  id: number;
  categoryName: string;
};

const SubCategoryDrawer = ({ categories }: SubCategoryDrawerProps) => {
  const dispatch = useDispatch();
  const choicedIdx = useSelector(
    (state: RootState) => state.categoryDrawer.choicedIdx
  );
  const isDrawerOpen = useSelector(
    (state: RootState) => state.categoryDrawer.isDrawerOpen
  );

  const getActiveCategory = (index: number) => {
    dispatch(setChoicedIdx(index));
    dispatch(setCategoryId(categories[index].id));
    dispatch(closeDrawer());
  };

  return (
    <Container $isDrawerOpen={isDrawerOpen}>
      <TopContainer>
        {categories.map((category: categoryType, idx) => (
          <Category
            onClick={() => {
              getActiveCategory(idx);
            }}
            $selected={choicedIdx === idx}
            key={category.id}
          >
            {category.categoryName}
          </Category>
        ))}
      </TopContainer>
    </Container>
  );
};

export default SubCategoryDrawer;

const Container = styled.div<{ $isDrawerOpen: boolean }>`
  width: 100%;
  height: ${({ $isDrawerOpen }) => ($isDrawerOpen ? '100vh' : '0')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const TopContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0 0 23px 23px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 10px;
`;
const Category = styled.span<{ $selected: boolean }>`
  font-size: 0.8rem;
  text-align: left;
  color: ${({ $selected }) => ($selected ? '#000' : '#888888')};
`;
