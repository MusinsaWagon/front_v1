import styled from 'styled-components';
import logo from '../assets/images/Logo.png';
const Header = () => {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
};

const Container = styled.div``;
const Logo = styled.img``;
export default Header;
