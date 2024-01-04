import styled from '@emotion/styled';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';

import { CurInvitesContext } from '../../context/CurInvitesContext';
import { getInvites } from '../../hooks/getInvitesFromId';
import { NoFillButton } from '../../uiComponents/NoFillButton';
import PrimaryInputCB from '../../uiComponents/PrimaryInputCB';
import { Subtitle } from '../../uiComponents/Subtitle';

const FindInviteBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const FindInviteSubtitle = styled(Subtitle)`
  color: ${(props) => props.theme.colors.orange};
`;

const FindInvite = () => {
  const [name, setName] = useState<string>('');
  const { invites, setInvites } = useContext(CurInvitesContext);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const handleOnNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
    if (isNotFound) setIsNotFound(false);
  };

  const inviteLookup = async () => {
    const personId = name.toLowerCase().replace(/ /g, '');
    const inviteList = await getInvites(personId);
    if (!inviteList) {
      setIsNotFound(true);
      setInvites([]);
    } else {
      setInvites(inviteList);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!invites || (invites && invites.length === 0)) {
      await inviteLookup();
      setName('');
    }
  };

  return (
    <FindInviteBlock>
      <FindInviteSubtitle variant="sm">Find your invite</FindInviteSubtitle>
      <PrimaryInputCB value={name} onChange={handleOnNameChange} placeholder="FIRST LAST" />
      <NoFillButton onClick={onSubmit}>Search</NoFillButton>
    </FindInviteBlock>
  );
};

export default FindInvite;
