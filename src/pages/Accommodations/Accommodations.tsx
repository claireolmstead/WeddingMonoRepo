import styled from '@emotion/styled';
import React from 'react';

import { accommodations } from '../../consts/accommodations';
import AccommodationsImg from '../../images/Accommodations.png';
import ListItemBlock from '../../uiComponents/ListItemBlock';

const AccommodationsBackground = styled.div`
  background: url(${AccommodationsImg}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100vh;
  position: absolute;
  width: 100vw;
`;

const Accommodations = () => {
  return (
    <div>
      <AccommodationsBackground />
      <ListItemBlock list={accommodations} />
      <div>
        PLEASE BOOK ACCOMMODATION AS SOON AS POSSIBLE AS THERE IS{' '}
        <b>NO GUARANTEE OF AVAILABILITY</b>.
      </div>
    </div>
  );
};

export default Accommodations;
