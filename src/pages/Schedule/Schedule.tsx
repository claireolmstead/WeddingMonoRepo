import styled from '@emotion/styled';
import React from 'react';

import { schedule } from '../../consts/schedule';
import ScheduleBackground from '../../images/Schedule.png';
import ListItemBlock from '../../uiComponents/ListItemBlock';

const ScheduleImg = styled.div`
  //@keyframes slideUp {
  //  from {
  //    height: 0;
  //  }
  //  to {
  //    height: calc(100vw * 1.54);
  //  }
  //}

  //animation-duration: 1s;
  //animation-name: slideUp;
  //animation-timing-function: ease-out;
  background: url(${ScheduleBackground}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: calc(180vh);
  min-height: 1500px;
  position: absolute;
  width: 100vw;
`;

const Schedule = () => {
  return (
    <div>
      <ScheduleImg />
      <ListItemBlock list={schedule} />
    </div>
  );
};

export default Schedule;
