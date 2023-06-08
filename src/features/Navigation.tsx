import styled from '@emotion/styled';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';

const NavBlock = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  .active {
    text-decoration: underline;
  }

  a {
    color: ${(props) => props.theme.colors.green};
    text-transform: uppercase;
  }

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    gap: 40px;
  }
`;

const Navigation = () => {
  return (
    <NavBlock>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/schedule">Schedule</NavLink>
      <NavLink to="/lodging">Pioneertown, CA</NavLink>
      <NavLink to="/rsvp">RSVP</NavLink>
      <NavLink to="/registry">Registry</NavLink>
    </NavBlock>
  );
};

export default Navigation;
