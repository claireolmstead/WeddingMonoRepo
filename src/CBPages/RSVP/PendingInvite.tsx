import styled from '@emotion/styled';
import React from 'react';

import { NoFillButton } from '../../uiComponents/NoFillButton';
import Invite from './Invite/Invite';

const PendingInviteBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PendingInvite = ({ goToNext }: { goToNext: () => void }) => {
  return (
    <PendingInviteBlock>
      <Invite />
      <NoFillButton className="btn" onClick={goToNext}>
        Next
      </NoFillButton>
    </PendingInviteBlock>
  );
};

export default PendingInvite;
