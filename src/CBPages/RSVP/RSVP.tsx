import styled from '@emotion/styled';
import React, { useContext, useEffect, useState } from 'react';

import { ScreenSizes } from '../../consts/vars';
import { CurInvitesContext } from '../../context/CurInvitesContext';
import { hasAllRespondedCB } from '../../hooks/hasAllRespondedSN';
import RSVPImg from '../../images/CBImages/RSVP.jpg';
import { Person, RSVPState } from '../../types';
import Container from '../../uiComponents/Container';
import Footer from '../../uiComponents/Footer';
import { PageTitle } from '../../uiComponents/PageTitle';
import EditInvite from './EditInvite/EditInvite';
import EnterEmails from './EnterEmails';
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
  const [hasSuccess, setHasSuccess] = useState<boolean>(false);
  const [rsvpState, setRsvpState] = useState<RSVPState>('UNDEFINED');
  const { invites } = useContext(CurInvitesContext);

  useEffect(() => {
    if (invites && invites?.length > 0 && rsvpState !== 'EDITING') {
      hasAllRespondedCB(invites) ? setRsvpState('RESPONDED') : setRsvpState('PENDING');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invites]);

  const getRSVPState = () => {
    switch (rsvpState) {
      case 'UNDEFINED': {
        return <FindInvite goToNext={() => setRsvpState('PENDING')} />;
      }
      case 'PENDING': {
        return <PendingInvite goToNext={() => setRsvpState('EMAIL')} />;
      }
      case 'EMAIL': {
        return (
          <EnterEmails invites={invites as Person[]} goToNext={() => setRsvpState('EDITING')} />
        );
      }
      case 'EDITING': {
        return (
          <EditInvite
            invites={invites as Person[]}
            setRsvpState={setRsvpState}
            setHasSuccess={() => setHasSuccess(true)}
          />
        );
      }
      case 'RESPONDED': {
        return (
          <RespondedInvite
            invites={invites as Person[]}
            setRsvpState={setRsvpState}
            isOpen={hasSuccess}
            close={() => setHasSuccess(false)}
          />
        );
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
        {(rsvpState === 'PENDING' || rsvpState === 'RESPONDED') && <Footer />}
      </RSVPContainer>
    </>
  );
};

export default RSVP;
