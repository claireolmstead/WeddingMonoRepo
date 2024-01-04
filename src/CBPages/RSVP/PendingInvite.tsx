import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { NoFillButton } from '../../uiComponents/NoFillButton';
import Invite from './Invite/Invite';

const PendingInviteBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PendingInvite = () => {
  return (
    <PendingInviteBlock>
      <Invite />
      <Link to={'../rsvp/edit'}>
        <NoFillButton>Next</NoFillButton>
      </Link>
    </PendingInviteBlock>
  );
};

export default PendingInvite;
