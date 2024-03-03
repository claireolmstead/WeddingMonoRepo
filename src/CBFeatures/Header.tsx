import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';
import Palm from '../images/CBImages/Palm.svg';
import Container from '../uiComponents/Container';
import Navigation from './Navigation';

const HeaderContainer = styled(Container)`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
  position: relative;
  z-index: 200;
`;

const HeaderImg = styled.img`
  height: 60px;
  left: 20px;
  position: fixed;
  top: 20px;

  @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
    height: 75px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        {/*<HeaderImg src={Logo} alt={'N+S'} />*/}
        <HeaderImg src={Palm} alt={'C+B'} />
      </Link>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
