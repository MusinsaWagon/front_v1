import styled from 'styled-components';
import { IoIosArrowDropdown } from 'react-icons/io';
import SubCategoryDrawer from './SubCategoryDrawer';
import { useDispatch, useSelector } from 'react-redux';
import {
  setChoicedIdx,
  setCategoryId,
  openDrawer,
} from '../../../../store/drawer/categoyDrawer.slice';
import { RootState } from '../../../../store/store';
type CategoryListProps = {
  categories: CategoryType[];
};
type CategoryType = {
  id: number;
  categoryName: string;
};
const CategoryList = ({ categories }: CategoryListProps) => {
  const dispatch = useDispatch();
  const choicedIdx = useSelector(
    (state: RootState) => state.categoryDrawer.choicedIdx
  );

  const getActiveCategory = (index: number) => {
    dispatch(setChoicedIdx(index));
    dispatch(setCategoryId(categories[index].id));
  };
  return (
    <Container>
      <SubCategoryDrawer categories={categories} />
      <List>
        {categories.map((category: CategoryType, idx) => (
          <Category
            key={category.id}
            choiced={choicedIdx === idx}
            onClick={() => getActiveCategory(idx)}
          >
            {category.categoryName}
          </Category>
        ))}
      </List>
      <button onClick={() => dispatch(openDrawer())}>
        <IoIosArrowDropdown />
      </button>
    </Container>
  );
};

export default CategoryList;
const Container = styled.div`
  border: 1px solid #d4d4d4;
  padding: 0 10px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  position: relative;
  button {
    background-color: transparent;
    color: #888888;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const List = styled.div`
  display: flex;
  overflow-x: auto;
  width: 93%;
`;
const Category = styled.span<{ choiced: boolean }>`
  display: inline-block;
  padding: 8px 11px;
  font-size: 0.8rem;
  color: ${({ choiced }) => (choiced ? '#000000' : '#888888')};
  font-weight: ${({ choiced }) => (choiced ? 'bold' : 'normal')};
`;
