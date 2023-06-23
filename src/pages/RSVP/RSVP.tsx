import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';

import { CurInvitesContext } from '../../context/CurInvitesContext';
import { getInvites } from '../../hooks/getInvitesFromId';
import HomeBackgroundImg from '../../images/HomeBackgroundImg.jpg';
import Container from '../../uiComponents/Container';
import PrimaryButton from '../../uiComponents/PrimaryButton';
import RSVPFormList from './RSVPFormList';

const RSVPBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${HomeBackgroundImg});
  background-position: top;
`;

const RSVPContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const RSVPName = styled.div`
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.type.main_body};
  font-size: 28px;
  font-weight: bold;
`;

const RSVPTitle = styled.div`
  ${(props) => props.theme.type.page_title};
  color: ${(props) => props.theme.colors.orange};
  margin-top: 20px;
  text-align: center;
`;

const RSVP = () => {
  const { invites, setInvites, hasAllRsvped, setHasAllRsvped } = useContext(CurInvitesContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  if (!invites) return <>Not yet logged in.</>;

  const inviteLookup = async () => {
    const inviteList = await getInvites(invites[0].id);
    if (!inviteList) {
      setInvites([]);
    } else {
      setInvites(inviteList);
    }
  };

  return (
    <>
      <RSVPBackground />
      <RSVPContainer>
        <RSVPTitle>{hasAllRsvped && !isEditing ? 'Successful RSVP!' : 'RSVP'}</RSVPTitle>
        {hasAllRsvped && !isEditing ? (
          <>
            {invites.map((person) => (
              <RSVPName key={person.id}>
                {person.first} {person.last}
              </RSVPName>
            ))}
            <PrimaryButton type={'button'} onClick={() => setIsEditing(true)}>
              Edit RSVP
            </PrimaryButton>
          </>
        ) : (
          <RSVPFormList
            invites={invites}
            setIsFinished={() => {
              inviteLookup();
              setIsEditing(false);
              setHasAllRsvped(true);
            }}
          />
        )}
      </RSVPContainer>
    </>
  );
};

export default RSVP;
