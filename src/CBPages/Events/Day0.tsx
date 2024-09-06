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

const Day0 = () => {
  return (
    <EventDay>
      <EventDate color={colors.orange}>Thursday, January 18, 2025</EventDate>
      <EventItem>
        <Subtitle>Arrival Night Cap</Subtitle>
        <DatePlace>Copper Bar</DatePlace>
        <Details>Aloha! Join us for a night cap at Copper Bar to kick off the weekend!</Details>
      </EventItem>
    </EventDay>
  );
};

export default Day0;
