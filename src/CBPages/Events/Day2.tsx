import React, { useEffect } from 'react';

import { colors } from '../../style/Colors';
import { Subtitle } from '../../uiComponents/Subtitle';
import { EventDate, EventDay, EventItem } from './sharedStyles';

const Day2 = () => {
  return (
    <EventDay>
      <EventDate color={colors.orange}>Saturday, January 18, 2025</EventDate>
      <EventItem>
        <Subtitle>Wedding Ceremony</Subtitle>
        <div>3:15 pm | __Location__</div>
        <div>ATTIRE: Formal Luau. Floor-length preferred.</div>
      </EventItem>
      <EventItem>
        <Subtitle>Reception</Subtitle>
        <div>Cocktail hour, dinner & dancing to follow</div>
      </EventItem>
    </EventDay>
  );
};

export default Day2;
