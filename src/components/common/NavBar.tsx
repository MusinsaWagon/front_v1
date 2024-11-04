import styled from 'styled-components';
import logo from '../../assets/images/Logo.png';
import { COLORS } from '../../constant/theme';

const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${COLORS.black};
  height: 79px;
  width: calc(100vw);
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 17px;
  border-bottom: 1px solid #4f4f4f;
  position: sticky;
  z-index: 100;
  top: 0;
`;
const Logo = styled.img`
  height: 15px;
  width: 120px;
`;
export default Header;
