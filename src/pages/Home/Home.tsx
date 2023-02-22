import styled from '@emotion/styled';
import React from 'react';

import HomeImage from '../../images/Home.png';

const HomeBlock = styled.div`
  height: 100vh;
  perspective: 1px;
  width: 100%;
`;

const HomeImg = styled.div`
  @keyframes slideUp {
    from {
      height: 0;
    }
    to {
      height: 100vh;
    }
  }

  animation-duration: 1s;
  animation-name: slideUp;
  animation-timing-function: ease-out;
  background: url(${HomeImage}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100vh;
  position: absolute;
  width: 100vw;
`;

const HomeContent = styled.div`
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
  ${(props) => props.theme.typography.main_title};
  font-size: 38px;
`;

const HomeNames = styled.div`
  ${(props) => props.theme.typography.main_title};
  color: ${(props) => props.theme.colors.red};
`;

const Home = () => {
  return (
    <HomeBlock>
      <HomeImg />
      <HomeContent>
        <HomeContentInner>
          <HomeDate>OCTOBER 27, 2023 • PIONEERTOWN, CA</HomeDate>
          <HomeJoinUs>please join us for the wedding of</HomeJoinUs>
          <HomeNames>STERLING CLAIRE OLMSTEAD</HomeNames>
          <HomeTo>TO</HomeTo>
          <HomeNames>NICHOLAS MAX REYNOLDS</HomeNames>
        </HomeContentInner>
      </HomeContent>
    </HomeBlock>
  );
};

export default Home;
