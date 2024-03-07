import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';

import { CurInvitesContext } from '../../context/CurInvitesContext';
import { Person } from '../../types';
import { NoFillButton } from '../../uiComponents/NoFillButton';
import PrimaryInputCB from '../../uiComponents/PrimaryInputCB';

const EnterEmailsBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputLabel = styled.div`
  text-align: left;
  ${(props) => props.theme.type.cb_body};
  text-transform: uppercase;
`;

const EnterEmails = ({ invites, goToNext }: { invites: Person[]; goToNext: () => void }) => {
  const { setInvites } = useContext(CurInvitesContext);
  const [updatedInvites, setUpdatedInvites] = useState<Person[]>(invites);

  const handleOnChange = (email: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedInviteItems = updatedInvites.map((invite, i) => {
      if (i === index) {
        return {
          ...invite,
          email: email.target.value,
        };
      }
      return invite;
    });

    setUpdatedInvites(updatedInviteItems);
  };

  const handleSubmit = (e: any) => {
    setInvites(updatedInvites);
    goToNext();
  };

  return (
    <EnterEmailsBlock>
      <div>First, enter emails for future communication.</div>
      {updatedInvites.map((invite, i) => (
        <div key={invite.id}>
          <InputLabel>{`${invite.first} ${invite.last}`}</InputLabel>
          <PrimaryInputCB
            value={invite.email || ''}
            onChange={(event) => handleOnChange(event, i)}
            placeholder={'email'}
          />
        </div>
      ))}
      <NoFillButton className="btn" onClick={handleSubmit}>
        Next
      </NoFillButton>
    </EnterEmailsBlock>
  );
};

export default EnterEmails;
