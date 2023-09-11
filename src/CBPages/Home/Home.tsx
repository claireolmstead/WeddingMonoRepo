import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import HomeImg from '../../images/CBImages/HomeImg.jpg';

const HomeBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${HomeImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;
const Home = () => {
  return (
    <>
      <HomeBackground />
    </>
  );
};

export default Home;
