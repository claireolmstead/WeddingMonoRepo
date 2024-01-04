import styled from '@emotion/styled';
import React, { useState } from 'react';

import { ScreenSizes } from '../../consts/vars';
import EventsImg from '../../images/CBImages/Events.jpg';
import Container from '../../uiComponents/Container';
import { PageTitle } from '../../uiComponents/PageTitle';
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import EventsNav from './EventsNav';

const EventsBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${EventsImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const EventsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
`;

const EventsBlock = styled.div`
  display: flex;
  gap: 80px;
  justify-content: center;
`;

export type EventsDay = 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

const Events = () => {
  const [curDay, setCurDay] = useState<EventsDay>('FRIDAY');

  const visibleDay = () => {
    switch (curDay) {
      case 'FRIDAY': {
        return <Day1 />;
      }
      case 'SATURDAY': {
        return <Day2 />;
      }
      case 'SUNDAY': {
        return <Day3 />;
      }
    }
  };

  return (
    <>
      <EventsBackground />
      <BlackOverlay />
      <EventsContainer>
        <PageTitle>Events</PageTitle>
        <EventsBlock>
          <EventsNav curDay={curDay} setCurDay={setCurDay} />
          {visibleDay()}
        </EventsBlock>
      </EventsContainer>
    </>
  );
};

export default Events;
