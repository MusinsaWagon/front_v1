import styled from 'styled-components';

type SubCategoryDrawerProps = {
  isDrawerOpen: boolean;
};
const SubCategoryDrawer = ({ isDrawerOpen }: SubCategoryDrawerProps) => {
  return (
    <Container $isDrawerOpen={isDrawerOpen}>
      <TopContainer>aefef</TopContainer>
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
  background-color: rgba(30, 30, 30, 0.6);
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;

const TopContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  padding-top: 25px;
  border-radius: 0 0 23px 23px;
`;
