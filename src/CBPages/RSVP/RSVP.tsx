import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import RSVPImg from '../../images/CBImages/RSVP.jpg';

const RSVPBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RSVPImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const RSVP = () => {
  return (
    <>
      <RSVPBackground />
      <BlackOverlay />
      RSVP
    </>
  );
};

export default RSVP;
