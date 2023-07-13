import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { forwardRef, useContext, useState } from 'react';

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

const RSVPAlert = styled.span`
  align-self: center;
  display: flex;
  gap: 30px;
`;

const RSVP = () => {
  const { invites, setInvites, hasAllRsvped, setHasAllRsvped } = useContext(CurInvitesContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  if (!invites) return <>Not yet logged in.</>;

  const inviteLookup = async () => {
    const inviteList = await getInvites(invites[0].id);
    if (!inviteList) {
      setInvites([]);
    } else {
      setInvites(inviteList);
    }
  };

  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

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
              setIsSnackbarOpen(true);
            }}
          />
        )}
      </RSVPContainer>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert onClick={() => setIsSnackbarOpen(false)} severity="success">
          <RSVPAlert>
            Successful RSVP! <CloseIcon fontSize="small" style={{ cursor: 'pointer' }} />
          </RSVPAlert>
        </Alert>
      </Snackbar>
    </>
  );
};

export default RSVP;
