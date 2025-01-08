// import styled from 'styled-components';
// import { MainContainer } from '../../styles/mainContainer';
// import SearchBox from '../mainPage/SearchBox';
// import { useState } from 'react';
// import { IoIosArrowBack } from 'react-icons/io';

// interface DrawerProps {
//   setIsDrawerVisible: React.Dispatch<React.SetStateAction<boolean>>;
//   setIsSearchVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }
// const SearchModal: React.FC<DrawerProps> = ({
//   setIsDrawerVisible,
//   setIsSearchVisible,
// }) => {
//   const [searchCont, setSearchCont] = useState('');
//   return (
//     <MainContainer>
//       <Container>
//         <TopBox>
//           <Back onClick={() => setIsSearchVisible(false)}>
//             <IoIosArrowBack />
//           </Back>
//           <SearchBox
//             setIsDrawerVisible={setIsDrawerVisible}
//             renderedPage="search"
//             setSearchCont={setSearchCont}
//           />
//         </TopBox>
//       </Container>
//     </MainContainer>
//   );
// };

// export default SearchModal;

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100%;
//   position: absolute;
//   z-index: 50;
//   background-color: ${({ theme }) => theme.colors.black};
//   top: 0;
//   left: 0;
//   padding: 20px 0;
//   box-sizing: border-box;
// `;
// const TopBox = styled.div`
//   padding: 13px 22px;
//   width: 100%;
//   height: 60px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Back = styled.button`
//   width: 20px;
//   height: 20px;
//   background-color: transparent;
//   color: white;
//   margin-right: 12px;
//   font-size: 20px;
// `;
