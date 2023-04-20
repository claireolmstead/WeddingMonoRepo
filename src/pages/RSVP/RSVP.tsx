import { collection, getDocs, query, where } from '@firebase/firestore';
import React, { useState } from 'react';

import { db } from '../../App';
import { Person } from '../../types';
import Container from '../../uiComponents/Container';
import FindRSVP from './FindRSVP';
import RSVPFormList from './RSVPFormList';

const RSVP = () => {
  const [invites, setInvites] = useState<Person[]>([]);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

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

  const getInvites = async (searchValue: string) => {
    const initialInvite = await getInitialInvite(searchValue);
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
  };

  return (
    <Container>
      <h1>RSVP</h1>
      <FindRSVP getInvites={getInvites} resetIsNotFound={() => setIsNotFound(false)} />
      <RSVPFormList invites={invites} />
      {isNotFound && <div>Not found.</div>}
    </Container>
  );
};

export default RSVP;
