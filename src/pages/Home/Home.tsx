import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import HomeImage from '../../images/Home.png';
import Container from '../../uiComponents/Container';

const HomeBlock = styled.div`
  height: 100vh;
  perspective: 1px;
  width: 100%;
`;

const HomeImg = styled.div`
  background: url(${HomeImage}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100vh;
  position: absolute;
  top: 120px;
  width: 100vw;
`;

const HomeContent = styled(Container)`
  box-sizing: border-box;
  position: relative;
  text-align: center;
  top: 50px;
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
  font-size: 20px;
  margin-bottom: 80px;
  text-align: center;
`;

const HomeJoinUs = styled.div`
  font-size: 20px;
  margin-bottom: 16px;
`;

const HomeTo = styled.div`
  ${(props) => props.theme.type.main_title};
  font-size: 38px;
`;

const HomeNames = styled.h2`
  ${(props) => props.theme.type.main_title};
  color: ${(props) => props.theme.colors.red};
  font-weight: normal;
  line-height: 1;
  margin: 50px;
`;

const Home = () => {
  return (
    <HomeBlock>
      <Parallax speed={20}>
        <HomeImg />
      </Parallax>
      <Parallax speed={-20}>
        <HomeContent>
          {document.fonts && (
            <HomeContentInner>
              <HomeDate>OCTOBER 27, 2023 • PIONEERTOWN, CA</HomeDate>
              <HomeJoinUs>please join us for the wedding of</HomeJoinUs>
              <HomeNames>STERLING CLAIRE OLMSTEAD</HomeNames>
              <HomeTo>TO</HomeTo>
              <HomeNames>NICHOLAS MAX REYNOLDS</HomeNames>
            </HomeContentInner>
          )}
        </HomeContent>
      </Parallax>
    </HomeBlock>
  );
};

export default Home;
