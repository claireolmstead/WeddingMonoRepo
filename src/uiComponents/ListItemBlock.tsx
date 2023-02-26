import styled from '@emotion/styled';
import React from 'react';

import { AccommodationItem, AccommodationItems, DaySchedule, Schedule } from '../types';
import ListItem from './ListItem';

const ScheduleContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  position: relative;
  top: 50px;
`;

interface ListItemBlockProps {
  list: Schedule | AccommodationItems;
}

const ListItemBlock = ({ list }: ListItemBlockProps) => {
  return (
    <div>
      <ScheduleContent>
        {list.map((listItem) => (
          <ListItem
            key={listItem.title}
            title={listItem.title}
            description={listItem.description}
            events={(listItem as DaySchedule)?.events}
            accommodationInfoItems={(listItem as AccommodationItem)?.infoItems}
          />
        ))}
      </ScheduleContent>
    </div>
  );
};

export default ListItemBlock;
