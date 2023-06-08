import styled from '@emotion/styled';
import React from 'react';

import { LodgingItem } from '../types';
import AccommodationInfoItems from './AccommodationInfoItems';

const ListItemWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

const ListItemInfo = styled.div`
  color: inherit;
`;

const ListItemTitle = styled.div`
  ${(props) => props.theme.type.sub_title};
  color: ${(props) => props.theme.colors.orange};
  font-size: 28px;
  padding-bottom: 20px;
`;

const ListItemDescription = styled.div`
  color: ${(props) => props.theme.colors.pink};
  font-size: 14px;
  margin-bottom: 16px;
`;

interface ListItemProps {
  title: string;
  description?: string;
  lodgingInfoItems?: LodgingItem['infoItems'];
}

const LodgingListItem = ({ title, description, lodgingInfoItems }: ListItemProps) => {
  return (
    <ListItemWrapper key={title}>
      <ListItemInfo>
        <ListItemTitle>{title}</ListItemTitle>
        {description && <ListItemDescription>{description}</ListItemDescription>}
        {lodgingInfoItems && <AccommodationInfoItems infoItems={lodgingInfoItems} />}
      </ListItemInfo>
    </ListItemWrapper>
  );
};
export default LodgingListItem;
