import styled from 'styled-components';

import home from '../../assets/images/homeIcon.png';
import heart from '../../assets/images/heartIcon.png';
import upload from '../../assets/images/uploadIcon.png';
import alarm from '../../assets/images/alarmIcon.png';
import profile from '../../assets/images/profileIcon.png';
import { useNavigate } from 'react-router-dom';

interface LogoProps {
  pos?: 'center';
}
const TabBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Item>
        <Logo src={home} />
      </Item>
      <Item>
        <Logo src={heart} />
      </Item>
      <Item onClick={() => navigate('/enroll')}>
        <Logo pos="center" src={upload} />
      </Item>
      <Item>
        <Logo src={alarm} />
      </Item>
      <Item>
        <Logo src={profile} />
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
const Logo = styled.img<LogoProps>`
  width: ${(props) => (props.pos === 'center' ? '32px' : '25px')};
  height: ${(props) => (props.pos === 'center' ? '32px' : '25px')};
`;
export default TabBar;
