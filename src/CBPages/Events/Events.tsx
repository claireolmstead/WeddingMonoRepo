import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

import { ScreenSizes } from '../../consts/vars';
import EventsImg from '../../images/CBImages/Events.jpg';
import MaunaKeaMap from '../../images/CBImages/MaunaKeaMap.jpg';
import BCPrimaryButton from '../../uiComponents/BCPrimaryButton';
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
  //padding: 0 60px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
`;

const EventsBlockMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const EventsBlock = styled.div`
  display: flex;
  gap: 80px;
  height: calc(100vh - 265px);
  justify-content: center;
  position: relative;
`;

const ToMapButton = styled(BCPrimaryButton)`
  bottom: 0;
  position: absolute;
  right: 0;
`;

const EventsMap = styled.img`
  justify-self: center;
  margin: 0 auto;
  max-height: 80vh;
  padding-top: 100px;
  width: 100%;
`;

export type EventsDay = 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

const Events = () => {
  const mapRef = useRef<null | HTMLImageElement>(null);
  const [curDay, setCurDay] = useState<EventsDay>('FRIDAY');
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

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

  const scrollToMap = () => {
    mapRef?.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <EventsBackground />
      <BlackOverlay />
      <EventsContainer>
        <PageTitle>Events</PageTitle>
        {windowSize < ScreenSizes.TABLET ? (
          <EventsBlockMobile>
            <Day1 />
            <Day2 />
            <Day3 />
            <EventsMap ref={mapRef} src={MaunaKeaMap} alt={'Map'} />
          </EventsBlockMobile>
        ) : (
          <>
            <EventsBlock>
              <EventsNav curDay={curDay} setCurDay={setCurDay} />
              {visibleDay()}
              <ToMapButton onClick={scrollToMap}>Venue Map</ToMapButton>
            </EventsBlock>
            <EventsMap ref={mapRef} src={MaunaKeaMap} alt={'Map'} />
          </>
        )}
      </EventsContainer>
    </>
  );
};

export default Events;
