import styled from 'styled-components';
import home from '../../assets/images/homeIcon.png';
import heart from '../../assets/images/heartIcon.png';
import upload from '../../assets/images/uploadIcon.png';
import alarm from '../../assets/images/alarmIcon.png';
import profile from '../../assets/images/profileIcon.png';
import { Link } from 'react-router-dom';

const TabBar = () => {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

  return isStandalone ? (
    <Container>
      <Item to="/">
        <Logo src={home} />
        <Text>홈</Text>
      </Item>
      <Item to="/heartList">
        <Logo src={heart} />
        <Text>찜</Text>
      </Item>
      <Item to="/enroll">
        <Logo src={upload} />
        <Text>상품 등록</Text>
      </Item>
      <Item to="/enrollList">
        <Logo src={alarm} />
        <Text>알림</Text>
      </Item>
      <Item to="/myPage">
        <Logo src={profile} />
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
const Logo = styled.img`
  width: 25px;
  height: 25px;
`;
const Text = styled.p`
  color: white;
  font-size: 10px;
  margin-top: 5px;
`;

export default TabBar;
