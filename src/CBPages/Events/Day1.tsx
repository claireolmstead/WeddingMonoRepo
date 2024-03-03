import styled from '@emotion/styled';
import React from 'react';

import { colors } from '../../style/Colors';
import { Subtitle } from '../../uiComponents/Subtitle';
import { EventDate, EventDay, EventItem } from './sharedStyles';

const DatePlace = styled.div`
  color: ${(props) => props.theme.colors.orange};
  text-transform: uppercase;
`;

const Details = styled.div`
  ${(props) => props.theme.type.cb_body_italics};
  letter-spacing: 4px;
`;

const Day1 = () => {
  return (
    <EventDay>
      <EventDate color={colors.orange}>Friday, January 17, 2025</EventDate>
      {/*<EventItem>*/}
      {/*  <Subtitle>Rehearsal Walk Through</Subtitle>*/}
      {/*  <DatePlace>4:30 pm | 3rd Fairway</DatePlace>*/}
      {/*</EventItem>*/}
      {/*<EventItem>*/}
      {/*  <Subtitle>Rehearsal Dinner</Subtitle>*/}
      {/*  <DatePlace>5 pm | Parker Cottage</DatePlace>*/}
      {/*  <Details>Drinks, Dinner, & Toasts</Details>*/}
      {/*</EventItem>*/}
      <EventItem>
        <Subtitle>Welcome Cocktails</Subtitle>
        <DatePlace>7 pm | South Point Lawn</DatePlace>
        <Details>Drinks & hors d&apos;oeuvres</Details>
        <Details>ATTIRE: Island Cocktail</Details>
      </EventItem>
    </EventDay>
  );
};

export default Day1;
