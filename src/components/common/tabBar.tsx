import styled from 'styled-components';
import { COLORS } from '../../Theme';

import home from '../../assets/images/homeIcon.png';
import heart from '../../assets/images/heartIcon.png';
import upload from '../../assets/images/uploadIcon.png';
import alarm from '../../assets/images/alarmIcon.png';
import profile from '../../assets/images/profileIcon.png';

interface LogoProps {
  pos?: 'center';
}
const TabBar = () => {
  return (
    <Container>
      <Item>
        <Logo src={home} />
      </Item>
      <Item>
        <Logo src={heart} />
      </Item>
      <Item>
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
  background-color: ${COLORS.black};
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  border-radius: 23px 23px 0 0;
`;
const Item = styled.button`
  background-color: transparent;
  margin-top: 16px;
`;
const Logo = styled.img<LogoProps>`
  width: ${(props) => (props.pos === 'center' ? '32px' : '27px')};
  height: ${(props) => (props.pos === 'center' ? '32px' : '25px')};
`;
export default TabBar;
