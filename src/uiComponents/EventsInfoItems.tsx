import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import React, { useState } from 'react';

import { Event } from '../types';
import EventInfoItemsDrawer from './EventInfoItemsModal';

const EventItem = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 100px 1fr;
  margin-bottom: 50px;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const EventTime = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.tan};
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
  text-wrap: none;
`;

const EventTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const EventSubTitle = styled.div``;

const EventLocation = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const EventWhatTo = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.red};
  cursor: pointer;
  display: flex;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

interface EventInfoItemsProps {
  events: Event[];
}

const EventsInfoItems = ({ events }: EventInfoItemsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {events.map((event) => (
        <EventItem key={event.title}>
          <EventTime>{event?.time}</EventTime>
          <EventInfo>
            <EventTitle>{event.title}</EventTitle>
            <EventLocation>
              <LocationOnIcon />
              {event.location}
            </EventLocation>
            <EventWhatTo onClick={handleToggleDrawer}>
              <StarIcon /> What To Wear & What To Know
            </EventWhatTo>

            {event.subtitle && <EventSubTitle>{event.subtitle}</EventSubTitle>}
            <div>{event.description}</div>

            <EventInfoItemsDrawer
              isOpen={isOpen}
              handleToggleDrawer={handleToggleDrawer}
              event={event}
            />
            <AddToCalendarButton
              name={event.title}
              startDate={event.startDate}
              startTime={event.startTime}
              endTime={event.endTime}
              options={['iCal', 'Apple', 'Google', 'Yahoo']}
              timeZone="America/Los_Angeles"
              hideCheckmark={true}
              buttonStyle="round"
            />
          </EventInfo>
        </EventItem>
      ))}
    </>
  );
};

export default EventsInfoItems;
