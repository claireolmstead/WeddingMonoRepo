import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../consts/vars';
import { AccommodationItem, Event } from '../types';
import AccommodationInfoItems from './AccommodationInfoItems';
import EventsInfoItems from './EventsInfoItems';

const ListItemWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    margin-left: 100px;
    padding-left: 20px;
    width: auto;
  }

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    margin-left: 220px;
  }
`;

const ListItemInfo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  text-align: left;
  width: 100%;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    height: 300px;
    width: 45vw;
  }
`;

const ListItemTitle = styled.div`
  ${(props) => props.theme.typography.main_title};
  color: ${(props) => props.theme.colors.tan};

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(90deg);
    transform-origin: 0 0;
  }
`;

const ListItemDescription = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 22px;
  margin-bottom: 16px;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    font-size: 28px;
  }
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
