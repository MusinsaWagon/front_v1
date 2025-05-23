import styled from 'styled-components';
import { Link } from 'react-router-dom';

//아이콘
import { TiHome } from 'react-icons/ti';
import { CiHeart } from 'react-icons/ci';
import { PiExportFill } from 'react-icons/pi';
import { CiBellOn } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';

const TabBar = () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

  return isStandalone ? (
    <Container>
      <Item to="/">
        <Logo>
          <TiHome />
        </Logo>
        <Text>홈</Text>
      </Item>
      <Item to="/heartList">
        <Logo>
          <CiHeart />
        </Logo>
        <Text>찜</Text>
      </Item>
      <Item to="/enroll">
        <Logo>
          <PiExportFill />
        </Logo>
        <Text>상품 등록</Text>
      </Item>
      <Item to="/enrollList">
        <Logo>
          <CiBellOn />
        </Logo>
        <Text>알림</Text>
      </Item>
      <Item to="/myPage">
        <Logo>
          <CgProfile />
        </Logo>
        <Text>마이페이지</Text>
      </Item>
    </Container>
  ) : null;
};

const Container = styled.div`
  max-width: 600px;
  height: 90px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  border-radius: 23px 23px 0 0;
  position: fixed;
  z-index: 100;
  bottom: 0;
`;
const Item = styled(Link)`
  background-color: transparent;
  margin-top: 16px;
`;
const Logo = styled.button`
  color: white;
  background-color: transparent;
  font-size: 25px;
`;
const Text = styled.p`
  color: white;
  font-size: 10px;
  margin-top: 5px;
`;

export default TabBar;
