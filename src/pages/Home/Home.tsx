import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import HomeImage from '../../images/wideshot/HomeBackground.jpg';
import Container from '../../uiComponents/Container';

const HomeBlock = styled.div`
  width: 100%;
`;

const HomeImg = styled.div`
  background: url(${HomeImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const HomeContent = styled(Container)`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
`;

const HomeContentInner = styled.div`
  position: relative;
  text-align: center;
  transform: translateZ(-999px);
  width: 100%;
`;

const HomeDate = styled.div`
  color: ${(props) => props.theme.colors.tan};
  font-size: 14px;
  margin-bottom: 50px;
  text-align: center;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    font-size: 16px;
    margin-bottom: 60px;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    font-size: 20px;
    margin-bottom: 70px;
  }
`;

const HomeJoinUs = styled.div`
  font-size: 20px;
  margin-bottom: 0;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    margin-bottom: 8px;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    margin-bottom: 16px;
  }
`;

const HomeTo = styled.div`
  ${(props) => props.theme.type.main_title};
  font-size: 20px;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    font-size: 28px;
  }

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    font-size: 38px;
  }
`;

const HomeNames = styled.h2`
  ${(props) => props.theme.type.main_title};
  color: ${(props) => props.theme.colors.red};
  font-weight: normal;
  line-height: 1;
  margin: 30px;
`;

const Home = () => {
  return (
    <HomeBlock>
      <HomeImg />
      <HomeContent>
        {document.fonts && (
          <HomeContentInner>
            <HomeDate>OCTOBER 27, 2023 • RIMROCK RANCH • PIONEERTOWN, CA</HomeDate>
            <HomeJoinUs>please join us for the wedding of</HomeJoinUs>
            <HomeNames>STERLING CLAIRE OLMSTEAD</HomeNames>
            <HomeTo>TO</HomeTo>
            <HomeNames>NICHOLAS MAX REYNOLDS</HomeNames>
          </HomeContentInner>
        )}
      </HomeContent>
    </HomeBlock>
  );
};

export default Home;
