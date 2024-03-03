import styled from '@emotion/styled';
import React, { useState } from 'react';

import { ScreenSizes } from '../../../consts/vars';
import { Person, RSVPState } from '../../../types';
import EditInviteForm from './EditInviteForm';
import EditInviteNames from './EditInviteNames';

const EditInviteBlock = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    flex-direction: row;
  }
`;

const EditInviteRight = styled.div`
  width: 600px;
`;

const EditInvite = ({
  invites,
  setRsvpState,
}: {
  invites: Person[];
  setRsvpState: (state: RSVPState) => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const goToNext = () => {
    const i = activeIndex + 1;
    setActiveIndex(i);
  };

  const goToPrev = () => {
    const i = activeIndex - 1;
    setActiveIndex(i);
  };

  return (
    <>
      <EditInviteBlock>
        <EditInviteNames invites={invites} activeIndex={activeIndex} />
        <EditInviteRight>
          <EditInviteForm
            person={invites[activeIndex]}
            prevPerson={invites[activeIndex - 1]}
            nextPerson={invites[activeIndex + 1]}
            goToNext={goToNext}
            goToPrev={goToPrev}
            setIsFinished={() => setRsvpState('RESPONDED')}
          />
        </EditInviteRight>
      </EditInviteBlock>
    </>
  );
};

export default EditInvite;
