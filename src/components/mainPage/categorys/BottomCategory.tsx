import styled from 'styled-components';
import { TopCategoryType } from '../types/categories';
import { useState, useEffect } from 'react';
import { getBottomCategories } from '../../../apis/category/axios';
import { IoIosArrowForward } from 'react-icons/io';
import { FaArrowRightToBracket } from 'react-icons/fa6';
interface BottomCategoryProps {
  categories: TopCategoryType[];
  selectedId: number;
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SubCategoryType {
  id: number;
  categoryName: string;
}

const BottomCategory: React.FC<BottomCategoryProps> = ({
  categories,
  selectedId,
  setIsDrawerVisible,
}) => {
  const [topCategoryName, setTopCategoryName] = useState(
    categories[selectedId - 1]?.categoryName
  );
  const [bottomCategories, setBottomCategories] = useState<SubCategoryType[]>(
    []
  );
  useEffect(() => {
    if (categories[selectedId - 1]) {
      setTopCategoryName(categories[selectedId - 1].categoryName);
    }
  }, [categories, selectedId]);

  useEffect(() => {
    const fetchBottomCategories = async () => {
      if (selectedId > 0) {
        try {
          const data = await getBottomCategories(selectedId);
          setBottomCategories(data.categoryList || []);
        } catch (error) {
          console.error('하위 카테고리:', error);
        }
      }
    };

    fetchBottomCategories();
  }, [selectedId]);

  return (
    <Container>
      <TopCategory>
        {topCategoryName}{' '}
        <RevertBtn onClick={() => setIsDrawerVisible((visible) => !visible)}>
          <FaArrowRightToBracket />
        </RevertBtn>
      </TopCategory>
      <BottomCategoryList>
        {bottomCategories.map((category) => (
          <Category key={category.id}>
            {category.categoryName}
            <Arrow>
              <IoIosArrowForward />
            </Arrow>
          </Category>
        ))}
      </BottomCategoryList>
    </Container>
  );
};

export default BottomCategory;
const Container = styled.div`
  flex: 1;
  width: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0 5px 100px 5px;
  overflow-y: auto;
`;
const TopCategory = styled.div`
  color: white;
  height: 8vh;
  border-bottom: 1px solid #4f4f4f;
  font-size: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 40px;
`;
const RevertBtn = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1rem;
`;
const BottomCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow-y: scroll;
`;
const Category = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 40px;
  font-size: 0.7rem;
  color: white;
`;
const Arrow = styled.span`
  color: white;
  font-size: 1rem;
`;
