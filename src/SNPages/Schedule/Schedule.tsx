import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { Parallax } from 'react-scroll-parallax';

import { schedule } from '../../consts/schedule';
import { ScreenSizes } from '../../consts/vars';
import { ScreenContext } from '../../context/ScreenContext';
import ScheduleBackgroundImage from '../../images/ScheduleBackground.jpg';
import StarPartition from '../../images/StarPartition.png';
import EventsInfoItems from '../../uiComponents/EventsInfoItems';
import { MaxWidthWrapper } from '../../uiComponents/MaxWidthWrapper';

const ScheduleBackground = styled.div`
  ${(props) => props.theme.mixins.backgroundImage};
  background-color: ${(props) => props.theme.colors.lightBlue};
`;

const ScheduleBackgroundImg = styled.div`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${ScheduleBackgroundImage});
  max-width: 30%;
`;

const ScheduleGrid = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: relative;
`;

const ListItemTitle = styled.div`
  ${(props) => props.theme.type.sub_title};
  align-self: flex-start;
  text-align: left;
`;

const ScheduleItemBlock = styled(Parallax)<{ isMobile: boolean }>`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  width: ${(props) => (props.isMobile ? '100%' : '70%')};

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    max-height: 1000px;
  }
`;

const ScheduleMaxWidthWrapper = styled(MaxWidthWrapper)`
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 800px;
  padding: 30px;
`;

const ScheduleTitle = styled.div`
  ${(props) => props.theme.type.page_title};
  color: ${(props) => props.theme.colors.orange};
  margin: 20px 0;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const ScheduleStarPartition = styled.img`
  height: 24px;
  margin: -20px 0;
  width: 100%;
`;

const Schedule = () => {
  const { isMobile } = useContext(ScreenContext);

  return (
    <>
      <ScheduleBackground />
      {!isMobile && <ScheduleBackgroundImg />}
      <>
        <ScheduleTitle>Schedule</ScheduleTitle>
        <ScheduleGrid>
          {schedule.map((item, index) => (
            <ScheduleItemBlock key={index} speed={index % 2 === 0 ? 20 : -10} isMobile={isMobile}>
              <ScheduleMaxWidthWrapper>
                <ListItemTitle>{item.date}</ListItemTitle>
                <ScheduleStarPartition src={StarPartition} />
                <EventsInfoItems events={item.events} />
              </ScheduleMaxWidthWrapper>
            </ScheduleItemBlock>
          ))}
        </ScheduleGrid>
      </>
    </>
  );
};

export default Schedule;
