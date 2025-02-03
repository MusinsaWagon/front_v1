import styled from 'styled-components';
import searchIcon from '../../assets/images/searchIcon.png';
import { BiCategory } from 'react-icons/bi';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBoxProps {
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  renderedPage: string;
  onClick?: () => void;
  setSearchCont?: React.Dispatch<React.SetStateAction<string>>;
  placeholderText: string;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
type Keyword = {
  id: number;
  text: string;
};
const SearchBox: React.FC<SearchBoxProps> = ({
  setIsDrawerVisible,
  onClick,
  renderedPage,
  setSearchCont,
  placeholderText,
  setIsSearchVisible,
}) => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText.trim() !== '') {
      const queryString = new URLSearchParams({
        keyword: searchText,
      }).toString();

      // 로컬스토리지 검색 기록 가져오기
      const existingKeywords = JSON.parse(
        localStorage.getItem('keywords') || '[]'
      ) as Keyword[];

      console.log('keyword:', existingKeywords);

      const newKeyword = { id: Date.now(), text: searchText };

      const updatedKeywords = [
        newKeyword,
        ...existingKeywords.filter((kw: Keyword) => kw.text !== searchText),
      ].slice(0, 10);

      localStorage.setItem('keywords', JSON.stringify(updatedKeywords));
      setIsSearchVisible(false);
      navigate(`/search/detail?${queryString}`);
    }
  };

  useEffect(() => {
    if (renderedPage !== 'main' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [renderedPage]);

  return (
    <Container>
      <SearchContainer>
        <Icon src={searchIcon} />
        {renderedPage === 'main' ? (
          <InputBox
            placeholder={placeholderText}
            onClick={onClick}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        ) : (
          <FormContainer onSubmit={handleSearchSubmit}>
            <InputBox
              ref={inputRef}
              placeholder={placeholderText}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                if (setSearchCont) {
                  setSearchCont(e.target.value);
                }
              }}
            />
          </FormContainer>
        )}
      </SearchContainer>

      {renderedPage === 'main' && (
        <BurgerBtn onClick={() => setIsDrawerVisible((prev) => !prev)}>
          <BiCategory />
        </BurgerBtn>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const FormContainer = styled.form`
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
  justify-content: center;
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
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchBox;
