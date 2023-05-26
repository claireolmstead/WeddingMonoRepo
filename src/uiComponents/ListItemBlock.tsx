import styled from '@emotion/styled';
import React from 'react';

import { AccommodationItem, DaySchedule, LodgingItems, Schedule } from '../types';
import Container from './Container';
import ListItem from './ListItem';

const ListItemContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
`;

interface ListItemBlockProps {
  list: Schedule | LodgingItems;
  className?: string;
}

const ListItemBlock = ({ list, className }: ListItemBlockProps) => {
  return (
    <Container>
      <ListItemContent className={className}>
        {list.map((listItem) => (
          <ListItem
            key={listItem.title}
            title={listItem.title}
            description={listItem.description}
            events={(listItem as DaySchedule)?.events}
            accommodationInfoItems={(listItem as AccommodationItem)?.infoItems}
          />
        ))}
      </ListItemContent>
    </Container>
  );
};

export default ListItemBlock;
