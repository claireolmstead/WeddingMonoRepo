import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';
import { ScreenContext } from '../context/ScreenContext';
import Logo from '../images/Logo.svg';
import Container from '../uiComponents/Container';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const HeaderBlock = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    padding: 30px 0;
  }
`;

const HeaderImg = styled.img`
  height: 50px;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    padding-bottom: 30px;
    height: 75px;
  }
`;

const Header = () => {
  const { isMobile } = useContext(ScreenContext);

  return (
    <Container>
      <HeaderBlock>
        <Link to={'/home'}>
          <HeaderImg src={Logo} alt={'N+S'} />
        </Link>
        {isMobile ? <MobileNavigation /> : <Navigation />}
      </HeaderBlock>
    </Container>
  );
};

export default Header;
