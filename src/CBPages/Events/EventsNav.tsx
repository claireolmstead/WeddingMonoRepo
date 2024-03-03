import styled from '@emotion/styled';
import React from 'react';

import { EventsDay } from './Events';

interface EventsNavProps {
  curDay: EventsDay;
  setCurDay: (day: EventsDay) => void;
}

const NavBlock = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  ${(props) => props.theme.type.cb_large_body};
  align-items: center;
  color: ${(props) => (props.isActive ? props.theme.colors.orange : props.theme.colors.white)};
  cursor: pointer;
  display: flex;
  gap: 16px;
  opacity: ${(props) => (props.isActive ? '1' : '0.3')};
  text-align: right;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
`;

const Circle = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.orange : props.theme.colors.white};
  border-radius: 15px;
  height: 30px;
  transition: 0.3s ease-in-out;
  width: 30px;
`;

const Line = styled.div`
  border-left: 2px solid ${(props) => props.theme.colors.white};
  height: 80px;
  opacity: 0.3;
  padding-right: 14px;
`;

const EventsNav = ({ curDay, setCurDay }: EventsNavProps) => {
  return (
    <NavBlock>
      <NavItem className="btn" onClick={() => setCurDay('FRIDAY')} isActive={curDay === 'FRIDAY'}>
        Welcome
        <Circle isActive={curDay === 'FRIDAY'} />
      </NavItem>
      <Line />
      <NavItem
        className="btn"
        onClick={() => setCurDay('SATURDAY')}
        isActive={curDay === 'SATURDAY'}
      >
        Wedding
        <Circle isActive={curDay === 'SATURDAY'} />
      </NavItem>
      <Line />
      <NavItem className="btn" onClick={() => setCurDay('SUNDAY')} isActive={curDay === 'SUNDAY'}>
        Beach Day
        <Circle isActive={curDay === 'SUNDAY'} />
      </NavItem>
    </NavBlock>
  );
};

export default EventsNav;
