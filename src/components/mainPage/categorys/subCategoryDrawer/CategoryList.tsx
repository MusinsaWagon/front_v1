import { useEffect, useState } from 'react';
import { getTopCategory } from '../../../../apis/\bcategory/axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropdown } from 'react-icons/io';
import { Dispatch, SetStateAction } from 'react';
import SubCategoryDrawer from './SubCategoryDrawer';
type CategoryListProps = {
  setCategoryName: (name: string) => void;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
  isDrawerOpen: boolean;
};
type CategoryType = {
  id: number;
  categoryName: string;
};
const CategoryList = ({
  setCategoryName,
  setIsDrawerOpen,
  isDrawerOpen,
}: CategoryListProps) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [choicedIdx, setChoicedIdx] = useState(0);
  const navigate = useNavigate();

  //데이터 fetch
  useEffect(() => {
    const getCategory = async () => {
      const res: CategoryType[] = await getTopCategory();
      console.log('상위 카테고리:', res);
      setCategories([{ id: 0, categoryName: '전체' }, ...res]);
    };
    getCategory();
  }, []);

  const getActiveCategory = (index: number, name: string) => {
    navigate(`/entire?category=${index}`);
    setChoicedIdx(index);
    setCategoryName(name);
  };
  return (
    <Container>
      <SubCategoryDrawer isDrawerOpen={isDrawerOpen} />
      <List>
        {categories.map((category: CategoryType) => (
          <Category
            key={category.id}
            choiced={choicedIdx === category.id}
            onClick={() =>
              getActiveCategory(category.id, category.categoryName)
            }
          >
            {category.categoryName}
          </Category>
        ))}
      </List>
      <button onClick={() => setIsDrawerOpen(true)}>
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
