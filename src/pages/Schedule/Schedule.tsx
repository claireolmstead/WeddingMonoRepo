import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { schedule } from '../../consts/schedule';
import Cactus2 from '../../images/icons/cactus-b.svg';
import CowboyHat from '../../images/icons/cowboy-hat.png';
import JoshuaTree from '../../images/icons/joshua-tree.svg';
import Sun from '../../images/icons/sun.svg';
import ScheduleBackground from '../../images/Schedule.png';
import HomeImage from '../../images/wideshot/HomeBackground.jpg';
import AccommodationInfoItems from '../../uiComponents/AccommodationInfoItems';
import Container from '../../uiComponents/Container';
import EventsInfoItems from '../../uiComponents/EventsInfoItems';
import ListItemBlock from '../../uiComponents/ListItemBlock';
import { MaxWidthWrapper } from '../../uiComponents/MaxWidthWrapper';

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

const ListItemWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const ListItemInfo = styled.div``;

const ListItemTitle = styled.div`
  ${(props) => props.theme.type.main_body};
  font-size: 28px;
  padding-bottom: 20px;
`;

const ScheduleItemBlock = styled(Parallax)<{ isEven: boolean }>`
  align-items: center;
  background-color: ${(props) =>
    props.isEven ? props.theme.colors.white : props.theme.colors.black};
  color: ${(props) => (props.isEven ? props.theme.colors.black : props.theme.colors.white)};
  display: flex;
  flex-direction: ${(props) => (props.isEven ? 'row' : 'row-reverse')};
  height: 100vh;
  opacity: 0.9;
`;

const ScheduleMaxWidthWrapper = styled(MaxWidthWrapper)<{ isEven: boolean }>`
  align-items: center;
  color: ${(props) => (props.isEven ? props.theme.colors.black : props.theme.colors.white)};
  display: flex;
  flex-direction: ${(props) => (props.isEven ? 'row' : 'row-reverse')};
  gap: 50px;
`;

const ScheduleImg = styled.img`
  height: 600px;
  object-fit: cover;
  width: 400px;
`;

const HomeImg = styled.div`
  background: url(${HomeImage}) no-repeat center center;
  background-size: cover;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const Schedule = () => {
  return (
    <>
      <HomeImg />
      {schedule.map((item, index) => (
        <ScheduleItemBlock key={index} isEven={index % 2 === 0} speed={index % 2 === 0 ? 20 : -10}>
          <ScheduleMaxWidthWrapper isEven={index % 2 === 0}>
            <ScheduleImg src={item.img} />
            <ListItemWrapper key={item.title}>
              <ListItemInfo>
                <ListItemTitle>{item.title}</ListItemTitle>
                <EventsInfoItems events={item.events} />
              </ListItemInfo>
            </ListItemWrapper>
          </ScheduleMaxWidthWrapper>
        </ScheduleItemBlock>
      ))}
    </>
  );
};

export default Schedule;
