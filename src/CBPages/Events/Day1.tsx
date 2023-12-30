import React from 'react';

import { colors } from '../../style/Colors';
import { Subtitle } from '../../uiComponents/Subtitle';
import { EventDate, EventDay, EventItem } from './sharedStyles';

const Day1 = () => {
  return (
    <EventDay>
      <EventDate color={colors.orange}>Friday, January 17, 2025</EventDate>
      <EventItem>
        <Subtitle>Rehearsal Walk Through</Subtitle>
        <div>4 pm | __Location__</div>
      </EventItem>
      <EventItem>
        <Subtitle>Rehearsal Dinner</Subtitle>
        <div>5 pm | __Location__</div>
        <div>Drinks, Dinner, & Toasts</div>
      </EventItem>
      <EventItem>
        <Subtitle>Welcome Cocktails</Subtitle>
        <div>7 pm | __Location__</div>
        <div>Drinks & horderves</div>
        <div>ATTIRE: Island Cocktail</div>
      </EventItem>
    </EventDay>
  );
};

export default Day1;
