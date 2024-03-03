import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ScreenSizes } from '../../consts/vars';
import { CurInvitesContext } from '../../context/CurInvitesContext';
import { hasAllResponded } from '../../hooks/hasAllResponded';
import RSVPImg from '../../images/CBImages/RSVP.jpg';
import { Person, RSVPState } from '../../types';
import Container from '../../uiComponents/Container';
import { PageTitle } from '../../uiComponents/PageTitle';
import EditInvite from './EditInvite/EditInvite';
import FindInvite from './FindInvite';
import PendingInvite from './PendingInvite';
import RespondedInvite from './RespondedInvite';

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

const RSVPContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const RSVP = () => {
  const [rsvpState, setRsvpState] = useState<RSVPState>('UNDEFINED');
  const { invites } = useContext(CurInvitesContext);

  useEffect(() => {
    console.log(rsvpState);

    if (invites && invites?.length > 0) {
      if (hasAllResponded(invites) && rsvpState !== 'EDITING') {
        setRsvpState('RESPONDED');
        return;
      }
      // setRsvpState('PENDING');
    }
    // eslint-disable-next-line
  }, [invites]);

  const getRSVPState = () => {
    switch (rsvpState) {
      case 'UNDEFINED': {
        return <FindInvite />;
      }
      case 'PENDING': {
        return <PendingInvite setRsvpState={setRsvpState} />;
      }
      case 'EDITING': {
        return <EditInvite invites={invites as Person[]} setRsvpState={setRsvpState} />;
      }
      case 'RESPONDED': {
        return <RespondedInvite invites={invites as Person[]} setRsvpState={setRsvpState} />;
      }
    }
  };

  return (
    <>
      <RSVPBackground />
      <BlackOverlay />
      <RSVPContainer>
        <PageTitle>RSVP</PageTitle>
        {getRSVPState()}
      </RSVPContainer>
    </>
  );
};

export default RSVP;
