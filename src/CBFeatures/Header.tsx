import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';
import Logo from '../images/CBImages/Logo.png';
import Container from '../uiComponents/Container';
import Navigation from './Navigation';

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  position: relative;
  z-index: 200;
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
  return (
    <HeaderContainer>
      <Link to={'/home'}>
        {/*<HeaderImg src={Logo} alt={'N+S'} />*/}
        <HeaderImg src={Logo} alt={'C+B'} />
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
