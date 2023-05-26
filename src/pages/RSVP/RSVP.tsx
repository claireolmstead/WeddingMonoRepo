import styled from '@emotion/styled';
import { collection, getDocs, query, where } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '../../App';
import { hasAllResponded } from '../../hooks/hasAllResponded';
import { Person } from '../../types';
import Container from '../../uiComponents/Container';
import PrimaryButton from '../../uiComponents/PrimaryButton';
import FindRSVP from './FindRSVP';
import RSVPFormList from './RSVPFormList';

const RSVPContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RSVPNotFound = styled.div`
  margin-top: 16px;
`;

const RSVPNotMe = styled.div`
  cursor: pointer;
  text-decoration: underline;
`;

const RSVPName = styled.div`
  color: ${(props) => props.theme.colors.red};
  ${(props) => props.theme.type.main_body};
  font-size: 28px;
  font-weight: bold;
`;

const RSVP = () => {
  const [invites, setInvites] = useState<Person[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  useEffect(() => {
    const curInvites = window.localStorage.getItem('curInvites');
    if (curInvites) {
      setInvites(JSON.parse(curInvites));
    }
  }, []);

  useEffect(() => {
    setSuccess(hasAllResponded(invites));
  }, [invites]);

  const handleNotMe = () => {
    window.localStorage.removeItem('curInvites');
    setInvites([]);
    setIsNotFound(false);
  };

  const getInitialInvite = async (searchValue: string) => {
    const q = query(collection(db, 'person'), where('id', '==', searchValue));
    const querySnapshot = await getDocs(q);
    let personList: Person[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      personList = [...personList, data as Person];
    });
    return personList[0];
  };

  const getInvites = async (searchValue?: string) => {
    const value = searchValue ?? invites[0].id;
    const initialInvite = await getInitialInvite(value);
    if (!initialInvite) {
      setIsNotFound(true);
      return;
    }

    const q = query(collection(db, 'person'), where('partyId', '==', initialInvite.partyId));
    const querySnapshot = await getDocs(q);
    let personList: Person[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      personList = [...personList, data as Person];
    });
    setInvites(personList);
    window.localStorage.setItem('curInvites', JSON.stringify(personList));
  };

  const handleOnSuccess = async () => {
    await getInvites();
    setSuccess(true);
  };

  return (
    <RSVPContainer>
      <h1>RSVP</h1>
      {invites.length === 0 && (
        <FindRSVP getInvites={getInvites} resetIsNotFound={() => setIsNotFound(false)} />
      )}
      {invites.length > 0 && success ? (
        <>
          <div>Successful RSVP!</div>
          {invites.map((person) => (
            <RSVPName key={person.id}>
              {person.first} {person.last}
            </RSVPName>
          ))}
          <RSVPNotMe onClick={handleNotMe}>Oops! Not Me</RSVPNotMe>
          <PrimaryButton type={'button'} colorWay={'secondary'} onClick={() => setSuccess(false)}>
            Edit RSVP
          </PrimaryButton>
        </>
      ) : (
        <RSVPFormList invites={invites} onSuccess={handleOnSuccess} />
      )}
      {isNotFound && (
        <RSVPNotFound>Not found. Make sure name is as appears on the invite.</RSVPNotFound>
      )}
    </RSVPContainer>
  );
};

export default RSVP;
