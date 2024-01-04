import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Person } from '../../types';
import { NoFillButton } from '../../uiComponents/NoFillButton';
import Invite from './Invite/Invite';

const RespondedInviteBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RespondedInvite = ({ invites }: { invites: Person[] }) => {
  const [isViewingRsvp, setIsViewingRsvp] = useState<boolean>(false);

  return (
    <RespondedInviteBlock>
      <NoFillButton onClick={() => setIsViewingRsvp(!isViewingRsvp)}>
        {isViewingRsvp ? 'Back' : 'View RSVP'}
      </NoFillButton>
      <Invite invites={invites} isViewingRsvp={isViewingRsvp} />
      <Link to={'../rsvp/edit'}>
        <NoFillButton>Edit RSVP</NoFillButton>
      </Link>
    </RespondedInviteBlock>
  );
};

export default RespondedInvite;
