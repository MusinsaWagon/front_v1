import styled from 'styled-components';
import { COLORS } from '../../constant/theme';

import searchIcon from '../../assets/images/searchIcon.png';
import hamburger from '../../assets/images/hamburger.png';
const SearchBox = () => {
  return (
    <Container>
      <SearchContainer>
        <Icon src={searchIcon} />
        <InputBox placeholder="원하는 상품, 브랜드 검색1" />
      </SearchContainer>
      <BurgerBtn>
        <Icon src={hamburger} />
      </BurgerBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
const SearchContainer = styled.div`
  background-color: ${COLORS.gray};
  width: 85%;
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
  background-color: ${COLORS.gray};
  border: none;
  border-radius: 7px;
`;
export default SearchBox;
