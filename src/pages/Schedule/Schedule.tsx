import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { schedule } from '../../consts/schedule';
import Cactus2 from '../../images/icons/cactus-b.svg';
import CowboyHat from '../../images/icons/cowboy-hat.png';
import JoshuaTree from '../../images/icons/joshua-tree.svg';
import Sun from '../../images/icons/sun.svg';
import ScheduleBackground from '../../images/Schedule.png';
import ListItemBlock from '../../uiComponents/ListItemBlock';
import { MaxWidthWrapper } from '../../uiComponents/MaxWidthWrapper';

const ScheduleImg = styled.div`
  background: url(${ScheduleBackground}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: calc(180vh);
  min-height: 1500px;
  position: absolute;
  top: -120px;
  width: 100vw;
`;

const ParallaxCowboyHat = styled(Parallax)`
  position: absolute;
  top: 200px;
  img {
    width: 250px;
  }
`;

const ParallaxSun1 = styled(Parallax)`
  left: 175px;
  position: absolute;
  top: 400px;
  img {
    width: 125px;
  }
`;

const ParallaxJoshuaTree = styled(Parallax)`
  position: absolute;
  right: -200px;
  top: 500px;
  img {
    width: 500px;
  }
`;

const ParallaxSun2 = styled(Parallax)`
  position: absolute;
  right: 50px;
  top: 1200px;
  img {
    width: 200px;
  }
`;

const ParallaxCactus2 = styled(Parallax)`
  left: -100px;
  position: absolute;
  top: 1200px;
  img {
    width: 400px;
  }
`;

const Schedule = () => {
  return (
    <MaxWidthWrapper>
      {/*<Parallax speed={-10}>*/}
      {/*  <ScheduleImg />*/}
      {/*</Parallax>*/}
      <Parallax speed={-25}>
        <ListItemBlock list={schedule} />
      </Parallax>
      <ParallaxCowboyHat speed={-10}>
        <img src={CowboyHat} />
      </ParallaxCowboyHat>
      <ParallaxSun1 speed={0}>
        <img src={Sun} />
      </ParallaxSun1>
      <ParallaxJoshuaTree speed={-25}>
        <img src={JoshuaTree} />
      </ParallaxJoshuaTree>
      <ParallaxCactus2 speed={-10}>
        <img src={Cactus2} />
      </ParallaxCactus2>
      <ParallaxSun2 speed={8}>
        <img src={Sun} />
      </ParallaxSun2>
    </MaxWidthWrapper>
  );
};

export default Schedule;
