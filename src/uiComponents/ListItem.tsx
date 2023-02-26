import styled from '@emotion/styled';
import React from 'react';

import { AccommodationItem, Event } from '../types';
import AccommodationInfoItems from './AccommodationInfoItems';
import EventsInfoItems from './EventsInfoItems';

const ListItemWrapper = styled.div`
  display: block;
  margin-left: 220px;
  padding-left: 20px;
  position: relative;
`;

const ListItemInfo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 300px;
  max-width: 500px;
  text-align: left;
  width: 500px;
`;

const ListItemTitle = styled.div`
  ${(props) => props.theme.typography.main_title};
  color: ${(props) => props.theme.colors.tan};
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;

const ListItemDescription = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 28px;
  margin-bottom: 16px;
`;

interface ListItemProps {
  title: string;
  description: string;
  events?: Event[];
  accommodationInfoItems?: AccommodationItem['infoItems'];
}

const ListItem = ({ title, description, events, accommodationInfoItems }: ListItemProps) => {
  return (
    <ListItemWrapper key={title}>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemInfo>
        <ListItemDescription>{description}</ListItemDescription>
        {events && <EventsInfoItems events={events} />}
        {accommodationInfoItems && <AccommodationInfoItems infoItems={accommodationInfoItems} />}
      </ListItemInfo>
    </ListItemWrapper>
  );
};
export default ListItem;
