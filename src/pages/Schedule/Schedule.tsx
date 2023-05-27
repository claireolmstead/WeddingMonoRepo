import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { schedule } from '../../consts/schedule';
import HomeImage from '../../images/wideshot/HomeBackground.jpg';
import EventsInfoItems from '../../uiComponents/EventsInfoItems';
import { MaxWidthWrapper } from '../../uiComponents/MaxWidthWrapper';

const ListItemWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const ListItemInfo = styled.div``;

const ListItemTitle = styled.div`
  ${(props) => props.theme.type.page_title};
  padding-bottom: 20px;
`;

const ScheduleItemBlock = styled(Parallax)<{ isEven: boolean }>`
  align-items: center;
  background-color: ${(props) =>
    props.isEven ? `rgba(255, 255, 255, 0.9)` : `rgba(0, 0, 0, 0.9)`};
  color: ${(props) => (props.isEven ? props.theme.colors.black : props.theme.colors.white)};
  display: flex;
  flex-direction: ${(props) => (props.isEven ? 'row' : 'row-reverse')};
  height: 100vh;
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

const Schedule = () => {
  return (
    <>
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
