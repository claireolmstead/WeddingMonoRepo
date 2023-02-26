import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';
import Logo from '../images/Logo.svg';
import Container from '../uiComponents/Container';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const HeaderBlock = styled.header`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HeaderImg = styled.img`
  height: 75px;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    padding-bottom: 30px;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderBlock>
        <Link to={'/home'}>
          <HeaderImg src={Logo} alt={'N+S'} />
        </Link>
        {window.innerWidth <= ScreenSizes.MOBILE ? <MobileNavigation /> : <Navigation />}
      </HeaderBlock>
    </Container>
  );
};

export default Header;
