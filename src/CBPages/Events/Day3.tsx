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

const Day3 = () => {
  return (
    <EventDay>
      <EventDate color={colors.orange}>Sunday, January 19, 2025</EventDate>
      <EventItem>
        <Subtitle>Beach Day</Subtitle>
        <DatePlace>Hau Tree</DatePlace>
        <Details>
          Please join the newlyweds for an afternoon of lounging, swimming, and maybe a Fredrico or
          two!
        </Details>
        <Details>ATTIRE: Board Shorts & Bikinis</Details>
      </EventItem>
    </EventDay>
  );
};

export default Day3;
