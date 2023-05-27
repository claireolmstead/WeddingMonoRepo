import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';

import { CurInvitesContext } from '../../context/CurInvitesContext';
import Container from '../../uiComponents/Container';
import PrimaryButton from '../../uiComponents/PrimaryButton';
import RSVPFormList from './RSVPFormList';

const RSVPContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const RSVPName = styled.div`
  color: ${(props) => props.theme.colors.red};
  ${(props) => props.theme.type.main_body};
  font-size: 28px;
  font-weight: bold;
`;

const RSVP = () => {
  const { invites, hasAllRsvped } = useContext(CurInvitesContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  if (!invites) return <>Not yet logged in.</>;

  return (
    <>
      <RSVPContainer>
        <h1>RSVP</h1>
        {hasAllRsvped && !isEditing ? (
          <>
            <div>Successful RSVP!</div>
            {invites.map((person) => (
              <RSVPName key={person.id}>
                {person.first} {person.last}
              </RSVPName>
            ))}
            <PrimaryButton
              type={'button'}
              colorWay={'secondary'}
              onClick={() => setIsEditing(true)}
            >
              Edit RSVP
            </PrimaryButton>
          </>
        ) : (
          <RSVPFormList invites={invites} />
        )}
      </RSVPContainer>
    </>
  );
};

export default RSVP;
