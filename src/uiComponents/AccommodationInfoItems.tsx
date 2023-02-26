import styled from '@emotion/styled';
import React from 'react';

import { AccommodationItem } from '../types';

const AccommodationInfoItem = styled.div`
  margin-bottom: 20px;
  padding-left: 20px;
`;

interface AccommodationInfoItemsProps {
  infoItems: AccommodationItem['infoItems'];
}

const AccommodationInfoItems = ({ infoItems }: AccommodationInfoItemsProps) => {
  return (
    <>
      {infoItems.map((infoItem, i) => (
        <AccommodationInfoItem key={i}>{infoItem}</AccommodationInfoItem>
      ))}
    </>
  );
};

export default AccommodationInfoItems;
