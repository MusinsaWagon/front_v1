import styled from 'styled-components';

import home from '../../assets/images/homeIcon.png';
import heart from '../../assets/images/heartIcon.png';
import upload from '../../assets/images/uploadIcon.png';
import alarm from '../../assets/images/alarmIcon.png';
import profile from '../../assets/images/profileIcon.png';
import { useNavigate } from 'react-router-dom';

const TabBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Item onClick={() => navigate('/')}>
        <Logo src={home} />
        <Text>홈</Text>
      </Item>
      <Item onClick={() => navigate('/heartList')}>
        <Logo src={heart} />
        <Text>찜</Text>
      </Item>
      <Item onClick={() => navigate('/enroll')}>
        <Logo src={upload} />
        <Text>상품 등록</Text>
      </Item>
      <Item onClick={() => navigate('/enrollList')}>
        <Logo src={alarm} />
        <Text>알림</Text>
      </Item>
      <Item>
        <Logo src={profile} />
        <Text>마이페이지</Text>
      </Item>
    </Container>
  );
};

const Container = styled.div`
  height: 72px;
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
const Item = styled.button`
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
