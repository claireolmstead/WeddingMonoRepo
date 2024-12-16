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
      <EventItem>
        <Subtitle>Welcome Cocktails</Subtitle>
        <DatePlace>7 pm | South Point Lawn</DatePlace>
        <Details>Drinks & pūpūs</Details>
        <Details>ATTIRE: Island Cocktail</Details>
        <Details>
          Collared shirts, khakis or bermudas, loafers or nice sandals welcome for men
        </Details>
        <Details>Sundresses or sets welcome for women</Details>
        <Details>The party is on grass, so choose appropriate shoes</Details>
      </EventItem>
    </EventDay>
  );
};

export default Day1;
