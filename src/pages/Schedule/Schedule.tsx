import styled from '@emotion/styled';
import React from 'react';

import { schedule } from '../../consts/schedule';
import ScheduleBackground from '../../images/Schedule.png';

const ScheduleImg = styled.div`
  @keyframes slideUp {
    from {
      height: 0;
    }
    to {
      height: calc(100vw * 1.54);
    }
  }

  animation-duration: 1s;
  animation-name: slideUp;
  animation-timing-function: ease-out;
  background: url(${ScheduleBackground}) rgba(0, 0, 0, 0.6) center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: calc(100vw * 1.54);
  position: absolute;
  width: 100vw;
`;

const ScheduleContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  position: relative;
  top: 50px;
`;

const ScheduleDayBlock = styled.div`
  display: block;
  margin-left: 220px;
  padding-left: 20px;
  position: relative;
`;

const ScheduleDayInfo = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 300px;
  max-width: 500px;
  text-align: left;
  width: 500px;
`;

const ScheduleEventItem = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 70px 1fr;
  margin-bottom: 20px;
`;

const ScheduleTitle = styled.div`
  ${(props) => props.theme.typography.main_title};
  color: ${(props) => props.theme.colors.tan};
  left: 0;
  position: absolute;
  top: 0;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;

const ScheduleDate = styled.div`
  color: ${(props) => props.theme.colors.red};
  font-size: 28px;
  margin-bottom: 16px;
`;

const ScheduleTime = styled.div`
  text-wrap: none;
`;

const Schedule = () => {
  return (
    <div>
      <ScheduleImg />
      <ScheduleContent>
        {schedule.map((day) => (
          <ScheduleDayBlock key={day.title}>
            <ScheduleTitle>{day.title}</ScheduleTitle>
            <ScheduleDayInfo>
              <ScheduleDate>{day.date}</ScheduleDate>
              {day.events.map((event) => (
                <ScheduleEventItem key={event.name}>
                  <ScheduleTime>{event?.time}</ScheduleTime>
                  <div>
                    <div>{event.name}</div>
                    {event?.comments &&
                      event.comments.map((comment) => <div key={comment}>{comment}</div>)}
                  </div>
                </ScheduleEventItem>
              ))}
            </ScheduleDayInfo>
          </ScheduleDayBlock>
        ))}
      </ScheduleContent>
    </div>
  );
};

export default Schedule;
