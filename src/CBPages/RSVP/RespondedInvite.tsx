import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Person, RSVPState } from '../../types';
import { NoFillButton } from '../../uiComponents/NoFillButton';
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
}: {
  invites: Person[];
  setRsvpState: (state: RSVPState) => void;
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
    </RespondedInviteBlock>
  );
};

export default RespondedInvite;
