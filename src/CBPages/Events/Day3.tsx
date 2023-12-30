import React from 'react';

import { colors } from '../../style/Colors';
import { Subtitle } from '../../uiComponents/Subtitle';
import { EventDate, EventDay, EventItem } from './sharedStyles';

const Day3 = () => {
  return (
    <EventDay>
      <EventDate color={colors.orange}>Sunday, January 19, 2025</EventDate>
      <EventItem>
        <Subtitle>Beach Day</Subtitle>
        <div>__Location__</div>
        <div>
          Please join the newly weds for an afternoon of lounging, swimming, and maybe a Fredrico or
          two.
        </div>
        <div>ATTIRE: Boardshorts & Bikinis</div>
      </EventItem>
    </EventDay>
  );
};

export default Day3;
