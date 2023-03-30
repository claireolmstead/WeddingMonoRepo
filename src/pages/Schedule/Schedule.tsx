import styled from '@emotion/styled';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { schedule } from '../../consts/schedule';
import ScheduleBackground from '../../images/Schedule.png';
import ListItemBlock from '../../uiComponents/ListItemBlock';

const ScheduleImg = styled.div`
  background: url(${ScheduleBackground}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: calc(180vh);
  min-height: 1500px;
  position: absolute;
  top: -120px;
  width: 100vw;
`;

const Schedule = () => {
  return (
    <div>
      <Parallax speed={-10}>
        <ScheduleImg />
      </Parallax>
      <Parallax speed={-25}>
        <ListItemBlock list={schedule} />
      </Parallax>
    </div>
  );
};

export default Schedule;
