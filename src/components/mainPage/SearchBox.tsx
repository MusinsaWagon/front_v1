import styled from 'styled-components';

import searchIcon from '../../assets/images/searchIcon.png';
import hamburger from '../../assets/images/hamburger.png';

interface SearchBoxProps {
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  renderedPage: string;
  onClick?: () => void;
  setSearchCont?: React.Dispatch<React.SetStateAction<string>>;
}
const SearchBox: React.FC<SearchBoxProps> = ({
  setIsDrawerVisible,
  onClick,
  renderedPage,
  setSearchCont,
}) => {
  return (
    <Container>
      <SearchContainer>
        <Icon src={searchIcon} />
        {renderedPage === 'main' ? (
          <InputBox placeholder="원하는 상품, 브랜드 검색" onClick={onClick} />
        ) : (
          <InputBox
            placeholder="원하는 상품, 브랜드 검색"
            onChange={(e) => {
              if (setSearchCont) {
                setSearchCont(e.target.value);
              }
            }}
          />
        )}
      </SearchContainer>
      {renderedPage === 'main' && (
        <BurgerBtn onClick={() => setIsDrawerVisible((pro) => !pro)}>
          <Icon src={hamburger} />
        </BurgerBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;
const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  height: 38px;
  box-sizing: border-box;
  border-radius: 45px;
  padding: 8px 19px;
  display: flex;
  align-items: center;
  gap: 5%;
  position: relative;
`;

const InputBox = styled.input`
  background-color: transparent;
  width: 100%;
  border: none;
  color: #ffffff;
  font-size: 10px;
  ::placeholder {
    color: #ffffff;
  }
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const BurgerBtn = styled.button`
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: 7px;
`;
export default SearchBox;
