import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';
import { ScreenContext } from '../context/ScreenContext';
import Logo from '../images/NSImages/Logo.png';
import Container from '../uiComponents/Container';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  position: relative;
  z-index: 200;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;

const HeaderImg = styled.img`
  height: 50px;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    height: 60px;
  }

  @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
    height: 75px;
  }
`;

const Header = () => {
  const { isMobile } = useContext(ScreenContext);

  return (
    <HeaderContainer>
      <Link to={'/home'}>
        <HeaderImg src={Logo} alt={'N+S'} />
      </Link>
      {isMobile ? <MobileNavigation /> : <Navigation />}
    </HeaderContainer>
  );
};

export default Header;
