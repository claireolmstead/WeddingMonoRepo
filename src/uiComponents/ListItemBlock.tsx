import styled from '@emotion/styled';
import React from 'react';

import { AccommodationItem, AccommodationItems, DaySchedule, Schedule } from '../types';
import Container from './Container';
import ListItem from './ListItem';

const ListItemContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  margin-bottom: 140px;
  padding-bottom: 70px;
  position: relative;
  top: 140px;
`;

interface ListItemBlockProps {
  list: Schedule | AccommodationItems;
}

const ListItemBlock = ({ list }: ListItemBlockProps) => {
  return (
    <Container>
      <ListItemContent>
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
