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

const HomeTitleBlock = styled.div`
  ${(props) => props.theme.type.cb_xs_title};
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

const HomeNames = styled.div`
  ${(props) => props.theme.type.sn_large_page_title};
`;

const Home = () => {
  return (
    <>
      <HomeBackground />
      <HomeTitleBlock>
        <>Please join us for the wedding of</>
        <HomeNames>Claire Olmstead</HomeNames>
        <>to</>
        <HomeNames>Brooks Clark</HomeNames>
      </HomeTitleBlock>
    </>
  );
};

export default Home;
