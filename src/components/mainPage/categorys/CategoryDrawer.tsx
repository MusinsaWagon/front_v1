import styled from 'styled-components';
import BottomCategory from './BottomCategory';
import TopCategory from './TopCategory';
import { MainContainer } from '../../../styles/mainContainer';
import { getTopCategory } from '../../../apis/drawer/axios';
import { useState, useEffect } from 'react';
import { TopCategoryType } from '../types/categories';

//타입
interface DrawerProps {
  $isVisible: boolean;
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryDrawer: React.FC<DrawerProps> = ({
  $isVisible,
  setIsDrawerVisible,
}) => {
  const [categories, setCategories] = useState<TopCategoryType[]>([]);
  const [selectedId, setSelectedId] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      const data: TopCategoryType[] | undefined = await getTopCategory();

      if (data) {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  return (
    <MainContainer>
      <Container $isVisible={$isVisible}>
        <TopCategory categories={categories} setSelectedId={setSelectedId} />
        <BottomCategory
          categories={categories}
          selectedId={selectedId}
          setIsDrawerVisible={setIsDrawerVisible}
        />
      </Container>
    </MainContainer>
  );
};

export default CategoryDrawer;

const Container = styled.div<{ $isVisible: boolean }>`
  display: flex;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  left: 0;
  padding: 20px 0;

  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;
