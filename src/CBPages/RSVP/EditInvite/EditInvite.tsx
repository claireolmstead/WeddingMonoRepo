import styled from '@emotion/styled';
import React, { useState } from 'react';

import { ScreenSizes } from '../../../consts/vars';
import { hasAllRespondedCB } from '../../../hooks/hasAllRespondedSN';
import { Person, RSVPState } from '../../../types';
import Toast from '../../../uiComponents/Toast';
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
  max-width: 600px;
  width: 100%;
`;

const EditInvite = ({
  invites,
  setRsvpState,
  setHasSuccess,
}: {
  invites: Person[];
  setRsvpState: (state: RSVPState) => void;
  setHasSuccess: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);

  const goToNext = () => {
    const i = activeIndex + 1;
    setActiveIndex(i);
  };

  const goToPrev = () => {
    const i = activeIndex - 1;
    setActiveIndex(i);
  };

  const isNotComplete = (person: Person) => {
    if (person.isInvitedToRehearsal) {
      return !person.rehearsal || !person.welcome || !person.ceremony || !person.beachDay;
    } else {
      return !person.welcome || !person.ceremony || !person.beachDay;
    }
  };

  const handleSwitchPerson = (index: number) => {
    const curPerson = invites[activeIndex];
    const isCurComplete = !isNotComplete(curPerson);

    if (isCurComplete) {
      setActiveIndex(index);
      return;
    } else {
      setHasError(true);
    }
  };

  return (
    <>
      <EditInviteBlock>
        <EditInviteNames
          invites={invites}
          activeIndex={activeIndex}
          handleSwitchPerson={handleSwitchPerson}
        />
        <EditInviteRight>
          <EditInviteForm
            setHasSuccess={setHasSuccess}
            isEditing={hasAllRespondedCB(invites)}
            person={invites[activeIndex]}
            prevPerson={invites[activeIndex - 1]}
            nextPerson={invites[activeIndex + 1]}
            goToNext={goToNext}
            goToPrev={goToPrev}
            setIsFinished={() => setRsvpState('RESPONDED')}
          />
        </EditInviteRight>
      </EditInviteBlock>
      <Toast
        isOpen={hasError}
        close={() => setHasError(false)}
        severity={'error'}
        message={'Must complete each field and save'}
      />
    </>
  );
};

export default EditInvite;
