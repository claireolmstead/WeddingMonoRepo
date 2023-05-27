import styled from '@emotion/styled';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

import { LodgingItem } from '../types';

const AccommodationInfoItem = styled.div`
  align-items: center;
  color: inherit;
  cursor: pointer;
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

interface AccommodationInfoItemsProps {
  infoItems: LodgingItem['infoItems'];
}

const AccommodationInfoItems = ({ infoItems }: AccommodationInfoItemsProps) => {
  return (
    <>
      {infoItems.map((infoItem, i) => (
        <AccommodationInfoItem key={i}>
          <StarIcon /> {infoItem}
        </AccommodationInfoItem>
      ))}
    </>
  );
};

export default AccommodationInfoItems;
