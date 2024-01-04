import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../../consts/vars';
import RSVPImg from '../../../images/CBImages/RSVP.jpg';
import { Person } from '../../../types';
import Container from '../../../uiComponents/Container';
import { PageTitle } from '../../../uiComponents/PageTitle';
import EditInviteForm from './EditInviteForm';
import EditInviteNames from './EditInviteNames';

const RSVPBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RSVPImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const EditInvite = ({ invites }: { invites: Person[] }) => {
  return (
    <>
      <RSVPBackground />
      <BlackOverlay />
      <Container>
        <PageTitle>RSVP</PageTitle>
        <EditInviteNames />
        <EditInviteForm
          isFinalPerson={false}
          person={invites[0]}
          goToNext={() => {}}
          setIsFinished={() => {}}
        />
      </Container>
    </>
  );
};

export default EditInvite;
