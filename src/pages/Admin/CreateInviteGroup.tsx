import styled from '@emotion/styled';
import { doc, getDoc, setDoc } from '@firebase/firestore';
import { Modal } from '@mui/material';
import React, { useState } from 'react';

import { db } from '../../App';
import { ScreenSizes } from '../../consts/vars';
import { NewPerson } from '../../types';
import PrimaryButton from '../../uiComponents/PrimaryButton';
import PrimaryInput from '../../uiComponents/PrimaryInput';
import InviteGroupList from './InviteGroupList';

const ModalInner = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  left: 50%;
  max-width: 800px;
  outline: none;
  padding: 16px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 94%;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    width: 80%;
    padding: 30px 50px;
  }
`;

const CreateInviteGroupTitle = styled.div`
  ${(props) => props.theme.type.sub_title};
`;

const NamesRow = styled.div`
  display: flex;
  gap: 20px;
`;

const CreateInviteGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialPerson: NewPerson = {
    first: '',
    last: '',
    id: '',
    partyId: 0,
  };
  const [person, setPerson] = useState<NewPerson>(initialPerson);
  const [people, setPeople] = useState<NewPerson[]>([]);
  const [error, setError] = useState<string>();

  const checkDoesExist = async (docRef: any) => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setError('Person already exists.');
      return;
    }
  };

  const createInvite = async () => {
    const personName = (person.first + person.last).toLowerCase();
    const personId = personName.replace(/ /g, '');
    const docRef = doc(db, 'person', `${personId}`);
    await checkDoesExist(docRef);

    let curPartyId;
    if (people.length === 0) {
      curPartyId = Math.floor(Math.random() * 1000000 + 1);
    } else {
      curPartyId = people[0].partyId;
    }
    const data = { ...person, id: personId, partyId: curPartyId };
    setPeople([...people, data]);
    setPerson({ ...initialPerson, partyId: curPartyId });
  };

  const handleOnChange = (value: string | boolean, key: string) => {
    if (error) setError(undefined);
    setPerson({ ...person, [key]: value });
  };

  const finishGroup = () => {
    if (people.length > 0) {
      people.map((person) => {
        const docRef = doc(db, 'person', `${person.id}`);
        setDoc(docRef, person)
          .then(() => {
            console.log('Document has been added successfully');
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
    setIsOpen(false);
    setPerson(initialPerson);
    setPeople([]);
  };

  return (
    <>
      <PrimaryButton onClick={() => setIsOpen(true)}>Create a new invite group</PrimaryButton>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalInner>
          <CreateInviteGroupTitle>Create A New Invite Group</CreateInviteGroupTitle>
          <NamesRow>
            <PrimaryInput
              placeholder={'First Name'}
              value={person.first}
              onChange={(e) => handleOnChange(e.currentTarget.value, 'first')}
            />
            <PrimaryInput
              placeholder={'Last Name'}
              value={person.last}
              onChange={(e) => handleOnChange(e.currentTarget.value, 'last')}
            />
          </NamesRow>
          {error ?? <div>{error}</div>}
          <PrimaryButton onClick={createInvite} colorWay={'secondary'}>
            Add Person
          </PrimaryButton>
          <PrimaryButton onClick={finishGroup}>Done</PrimaryButton>
          {people.length > 0 && <InviteGroupList people={people} />}
        </ModalInner>
      </Modal>
    </>
  );
};

export default CreateInviteGroup;
