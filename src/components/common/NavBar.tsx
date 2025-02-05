import styled from 'styled-components';
import logo from '../../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';

import { RxHamburgerMenu } from 'react-icons/rx';

import isPWAActive from '../../hooks/detectPWA/useIsPWA';
import { useState } from 'react';
import HamburgerModal from '../hamburger/HamburgerModal';
const Header = () => {
  const isPWA = isPWAActive();

  const [isFold, setIsFold] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  const token = localStorage.getItem('accessToken');

  return (
    <Container>
      <Logo src={logo} onClick={handleClick} />
      {!isPWA && token && (
        <HamburgerBtn onClick={() => setIsFold((prev) => !prev)}>
          <RxHamburgerMenu />
        </HamburgerBtn>
      )}
      {!isFold && <HamburgerModal setIsFold={setIsFold} />}
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.black};
  height: 96px;
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 17px;
  border-bottom: 1px solid #4f4f4f;
  position: fixed;
  z-index: 100;
  top: 0;
`;
const Logo = styled.img`
  height: 15px;
  width: 120px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const HamburgerBtn = styled.button`
  color: white;
  background-color: transparent;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  right: 22px;
`;
export default Header;
