import styled from '@emotion/styled';
import React from 'react';

import { LodgingItems } from '../types';
import Container from './Container';
import LodgingListItem from './LodgingListItem';

const ListItemContent = styled.div`
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  max-width: 500px;

  a {
    color: ${(props) => props.theme.colors.black};
  }
`;

interface ListItemBlockProps {
  list: LodgingItems;
  className?: string;
}

const LodgingListItemBlock = ({ list, className }: ListItemBlockProps) => {
  return (
    <Container>
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
    </Container>
  );
};

export default LodgingListItemBlock;
