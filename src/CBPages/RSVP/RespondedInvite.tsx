import styled from '@emotion/styled';
import React, { useState } from 'react';

import { Person, RSVPState } from '../../types';
import { NoFillButton } from '../../uiComponents/NoFillButton';
import Toast from '../../uiComponents/Toast';
import Invite from './Invite/Invite';

const RespondedInviteBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RespondedInvite = ({
  invites,
  setRsvpState,
  isOpen,
  close,
}: {
  invites: Person[];
  setRsvpState: (state: RSVPState) => void;
  isOpen: boolean;
  close: () => void;
}) => {
  const [isViewingRsvp, setIsViewingRsvp] = useState<boolean>(false);

  return (
    <RespondedInviteBlock>
      <NoFillButton className="btn" onClick={() => setIsViewingRsvp(!isViewingRsvp)}>
        {isViewingRsvp ? 'Back' : 'View RSVP'}
      </NoFillButton>
      <Invite invites={invites} isViewingRsvp={isViewingRsvp} />
      <NoFillButton className="btn" onClick={() => setRsvpState('EDITING')}>
        Edit RSVP
      </NoFillButton>
      <Toast
        isOpen={isOpen}
        close={close}
        severity={'success'}
        message={'Successfully updated RSVP!'}
      />
    </RespondedInviteBlock>
  );
};

export default RespondedInvite;
