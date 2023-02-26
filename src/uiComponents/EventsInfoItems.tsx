import styled from '@emotion/styled';
import React from 'react';

import { Event } from '../types';

const EventItem = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 70px 1fr;
  margin-bottom: 20px;
  padding-left: 20px;
`;

const EventTime = styled.div`
  text-wrap: none;
`;

interface EventInfoItemsProps {
  events: Event[];
}

const EventsInfoItems = ({ events }: EventInfoItemsProps) => {
  return (
    <>
      {events.map((event) => (
        <EventItem key={event.name}>
          <EventTime>{event?.time}</EventTime>
          <div>
            <div>{event.name}</div>
            {event?.comments && event.comments.map((comment) => <div key={comment}>{comment}</div>)}
          </div>
        </EventItem>
      ))}
    </>
  );
};

export default EventsInfoItems;
