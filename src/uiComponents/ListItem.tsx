import styled from '@emotion/styled';
import React from 'react';

import { AccommodationItem, Event } from '../types';
import AccommodationInfoItems from './AccommodationInfoItems';
import EventsInfoItems from './EventsInfoItems';

const ListItemWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const ListItemInfo = styled.div`
  color: inherit;
`;

const ListItemTitle = styled.div`
  ${(props) => props.theme.type.main_body};
  font-size: 28px;
  padding-bottom: 20px;
`;

const ListItemDescription = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

interface ListItemProps {
  title: string;
  description?: string;
  events?: Event[];
  accommodationInfoItems?: AccommodationItem['infoItems'];
}

const ListItem = ({ title, description, events, accommodationInfoItems }: ListItemProps) => {
  return (
    <ListItemWrapper key={title}>
      <ListItemInfo>
        <ListItemTitle>{title}</ListItemTitle>
        {description && <ListItemDescription>{description}</ListItemDescription>}
        {events && <EventsInfoItems events={events} />}
        {accommodationInfoItems && <AccommodationInfoItems infoItems={accommodationInfoItems} />}
      </ListItemInfo>
    </ListItemWrapper>
  );
};
export default ListItem;
