import styled from '@emotion/styled';
import { doc, setDoc } from '@firebase/firestore';
import { Modal } from '@mui/material';
import React, { useState } from 'react';

import { db } from '../../App';
import { ScreenSizes } from '../../consts/vars';
import { doesPersonExist } from '../../hooks/doesPersonExist';
import { getPersonId } from '../../hooks/getPersonId';
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
  ${(props) => props.theme.type.sn_sub_title};
  text-align: center;
`;

const NamesRow = styled.div`
  display: flex;
  gap: 20px;
`;

const CreateInviteGroupButton = styled(PrimaryButton)`
  max-width: none;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
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

  const createInvite = async () => {
    const personId = getPersonId(person.first, person.last);
    const docRef = doc(db, 'person', `${personId}`);
    await doesPersonExist(docRef);

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
      <CreateInviteGroupButton onClick={() => setIsOpen(true)}>
        Create a new invite group
      </CreateInviteGroupButton>
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
