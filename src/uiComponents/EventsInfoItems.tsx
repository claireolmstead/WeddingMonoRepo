import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
// import { AddToCalendarButton } from 'add-to-calendar-button-react';
import React, { useContext, useState } from 'react';

import { CurInvitesContext } from '../context/CurInvitesContext';
import { Event, Rehearsal } from '../types';
import EventInfoItemsDrawer from './EventInfoItemsDrawer';
import Row from './Row';

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;

const EventTime = styled.div`
  color: ${(props) => props.theme.colors.pink};
  ${(props) => props.theme.type.sub_page_title};
  white-space: nowrap;
`;

const EventTitle = styled.div`
  ${(props) => props.theme.type.sub_page_title};
  color: ${(props) => props.theme.colors.orange};
`;

const EventLocation = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
  display: flex;
  gap: 8px;

  a {
    color: ${(props) => props.theme.colors.green};
  }

  &:hover {
    text-decoration: underline;
  }
`;

const EventWhatTo = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  display: flex;
  gap: 8px;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;

interface EventInfoItemsProps {
  events: Event[];
}

const EventsInfoItems = ({ events }: EventInfoItemsProps) => {
  const { invites } = useContext(CurInvitesContext);

  const [isOpenTitle, setIsOpenTitle] = useState('');

  const handleOpenDrawer = (title: string) => {
    setIsOpenTitle(title);
  };

  const handleCloseDrawer = () => {
    setIsOpenTitle('');
  };

  const isShowingRehearsal =
    invites &&
    invites?.length > 0 &&
    (invites[0].rehearsal === Rehearsal.ATTENDING || invites[0].rehearsal === Rehearsal.YES);

  return (
    <>
      {events.map((event) => (
        <>
          {!isShowingRehearsal && event.title === 'Love Birds Rehearsal Dinner' ? (
            <></>
          ) : (
            <EventInfo key={event.title}>
              <Row>
                <EventTime>{event?.time}</EventTime>
                <EventTitle>{event.title}</EventTitle>
              </Row>

              <EventLocation>
                <LocationOnIcon />
                {event.location}
              </EventLocation>

              {event.whatToWear && (
                <EventWhatTo onClick={() => handleOpenDrawer(event.title)}>
                  <StarIcon />
                  <i>What To Wear + What To Know</i>
                </EventWhatTo>
              )}

              {/*<AddToCalendarButton*/}
              {/*  name={event.title}*/}
              {/*  startDate={event.startDate}*/}
              {/*  startTime={event.startTime}*/}
              {/*  endTime={event.endTime}*/}
              {/*  options={['iCal', 'Apple', 'Google', 'Yahoo']}*/}
              {/*  timeZone="America/Los_Angeles"*/}
              {/*  hideCheckmark={true}*/}
              {/*  styleLight="--btn-background: rgba(0, 0, 0, 0); --btn-background-hover: none; --btn-text: #fff; --btn-shadow: none; --btn-shadow-hover:none; --btn-shadow-active: none; --btn-border: none; --btn-text-hover: #f16522; margin: -1em; --font: Futura;"*/}
              {/*  lightMode="bodyScheme"*/}
              {/*  trigger={'click'}*/}
              {/*/>*/}

              <div>{event.description}</div>
              <EventInfoItemsDrawer
                key={event.title}
                isOpen={isOpenTitle === event.title}
                handleCloseDrawer={handleCloseDrawer}
                event={event}
              />
            </EventInfo>
          )}
        </>
      ))}
    </>
  );
};

export default EventsInfoItems;
