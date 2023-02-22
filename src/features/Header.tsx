import styled from '@emotion/styled';
import React from 'react';

import Logo from '../images/Logo.svg';
import Container from '../uiComponents/Container';
import Navigation from './Navigation';

const HeaderBlock = styled.header`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HeaderImg = styled.img`
  padding-bottom: 30px;
`;

const Header = () => {
  return (
    <Container>
      <HeaderBlock>
        <HeaderImg src={Logo} alt={'N+S'} />
        <Navigation />
      </HeaderBlock>
    </Container>
  );
};

export default Header;
