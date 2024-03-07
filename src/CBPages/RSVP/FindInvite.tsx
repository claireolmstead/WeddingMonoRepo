import styled from '@emotion/styled';
import React, { ChangeEvent, useContext, useState } from 'react';

import { CurInvitesContext } from '../../context/CurInvitesContext';
import { getInvites } from '../../hooks/getInvitesFromId';
import { RSVPState } from '../../types';
import { NoFillButton } from '../../uiComponents/NoFillButton';
import PrimaryInputCB from '../../uiComponents/PrimaryInputCB';
import Toast from '../../uiComponents/Toast';

const FindInviteBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;

const FindInviteSubtitle = styled.div`
  ${(props) => props.theme.type.cb_large_body};
  color: ${(props) => props.theme.colors.orange};
  text-transform: uppercase;
`;

const FindInvite = ({ goToNext }: { goToNext: () => void }) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { invites, setInvites } = useContext(CurInvitesContext);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    if (isNotFound) {
      setIsNotFound(false);
      setError('');
    }
  };

  const inviteLookup = async () => {
    const personId = name.toLowerCase().replace(/ /g, '');
    const inviteList = await getInvites(personId);
    if (inviteList === undefined) {
      setIsNotFound(true);
      setError('Name not found. Try spelling as seen on invite.');
      setInvites([]);
    } else {
      setInvites(inviteList);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await inviteLookup();

    if (invites && invites?.length > 0) {
      setName('');
      goToNext();
    }
  };

  return (
    <FindInviteBlock>
      <FindInviteSubtitle>Find your invite</FindInviteSubtitle>
      <PrimaryInputCB value={name} onChange={handleOnNameChange} placeholder="FIRST LAST" />
      <NoFillButton className="btn" onClick={onSubmit} disabled={name.length < 5}>
        Search
      </NoFillButton>
      <Toast isOpen={!!error} close={() => setError('')} severity={'error'} message={error} />
    </FindInviteBlock>
  );
};

export default FindInvite;
