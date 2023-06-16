import styled from '@emotion/styled';
import React from 'react';

import { LodgingItems } from '../types';
import LodgingListItem from './LodgingListItem';

const ListItemContent = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.blue};
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  max-width: 500px;

  a {
    color: ${(props) => props.theme.colors.blue};
  }
`;

interface ListItemBlockProps {
  list: LodgingItems;
  className?: string;
}

const LodgingListItemBlock = ({ list, className }: ListItemBlockProps) => {
  return (
    <ListItemContent className={className}>
      {list.map((listItem) => (
        <LodgingListItem
          key={listItem.title}
          title={listItem.title}
          description={listItem.description}
          lodgingInfoItems={listItem?.infoItems}
        />
      ))}
    </ListItemContent>
  );
};

export default LodgingListItemBlock;
