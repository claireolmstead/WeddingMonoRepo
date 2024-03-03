import styled from '@emotion/styled';
import React from 'react';

import { RSVPState } from '../../types';
import { NoFillButton } from '../../uiComponents/NoFillButton';
import Invite from './Invite/Invite';

const PendingInviteBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PendingInvite = ({ setRsvpState }: { setRsvpState: (state: RSVPState) => void }) => {
  return (
    <PendingInviteBlock>
      <Invite />
      <NoFillButton className="btn" onClick={() => setRsvpState('EDITING')}>
        Next
      </NoFillButton>
    </PendingInviteBlock>
  );
};

export default PendingInvite;
