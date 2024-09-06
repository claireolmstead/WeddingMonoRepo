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

const Day2 = () => {
  return (
    <EventDay>
      <EventDate color={colors.orange}>Saturday, January 18, 2025</EventDate>
      <EventItem>
        <Subtitle>Wedding Ceremony</Subtitle>
        <DatePlace>4:30 pm | 3rd Fairway</DatePlace>
        <Details>ATTIRE: Formal Luau</Details>
        <Details>Long dresses & mens jackets preferred</Details>
        <Details>The party is on grass, so choose appropriate shoes</Details>
      </EventItem>
      <EventItem>
        <Subtitle>Reception</Subtitle>
        <DatePlace>5:00 pm | Luau Grounds</DatePlace>
        <Details>Cocktails, dinner & dancing</Details>
      </EventItem>
    </EventDay>
  );
};

export default Day2;
