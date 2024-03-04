import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import { ScreenSizes } from '../../../consts/vars';
import { Person } from '../../../types';
import InviteInfo from './InviteInfo';
import ViewRSVP from './ViewRSVP';

const InviteBlock = styled.div`
  ${(props) => props.theme.type.cb_xs_title};
  align-items: center;
  background-color: ${(props) => props.theme.colors.orange};
  border-radius: 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  max-width: 700px;
  min-height: 320px;
  padding: 50px 80px;
  text-align: center;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    width: 600px;
  }

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    width: 700px;
  }
`;

const flipAnimation = css`
  @keyframes flip {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
  animation: flip 0.75s;
`;

const InviteBlockFront = styled(InviteBlock)`
  ${flipAnimation};
`;

const InviteBlockBack = styled(InviteBlock)`
  ${flipAnimation};
`;

interface PendingProps {
  invites?: undefined;
  isViewingRsvp?: undefined;
}
interface RespondedProps {
  invites: Person[];
  isViewingRsvp: boolean;
}

const Invite = ({ invites, isViewingRsvp = false }: PendingProps | RespondedProps) => {
  return (
    <>
      {isViewingRsvp ? (
        <InviteBlockBack>
          <ViewRSVP invites={invites as Person[]} />
        </InviteBlockBack>
      ) : (
        <InviteBlockFront>
          <InviteInfo />
        </InviteBlockFront>
      )}
    </>
  );
};

export default Invite;
