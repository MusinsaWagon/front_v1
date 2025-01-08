import styled from 'styled-components';
import { MainContainer } from '../../styles/mainContainer';
import SearchBox from '../mainPage/SearchBox';
import { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { searchListHandler } from '../../apis/search/axios';

interface DrawerProps {
  setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchModal: React.FC<DrawerProps> = ({
  setIsDrawerVisible,
  setIsSearchVisible,
}) => {
  const [searchCont, setSearchCont] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchCont);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchCont]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      console.log('deboundcedCalue:', debouncedValue);
      if (debouncedValue) {
        try {
          const data = await searchListHandler({ name: debouncedValue });
          setSearchResults(data);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      }
    };

    fetchSearchResults();
  }, [debouncedValue]);

  return (
    <MainContainer>
      <Container>
        <TopBox>
          <Back onClick={() => setIsSearchVisible(false)}>
            <IoIosArrowBack />
          </Back>
          <SearchBox
            setIsDrawerVisible={setIsDrawerVisible}
            renderedPage="search"
            setSearchCont={setSearchCont}
          />
        </TopBox>
        <BottomBox></BottomBox>
      </Container>
    </MainContainer>
  );
};

export default SearchModal;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  left: 0;
  padding: 20px 0;
  box-sizing: border-box;
`;
const TopBox = styled.div`
  padding: 13px 22px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Back = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: white;
  margin-right: 12px;
  font-size: 20px;
`;
const BottomBox = styled.div`
  margin-top: 20px;
  padding: 10px;
  color: white;
`;
