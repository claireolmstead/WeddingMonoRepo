import { collection, getDocs, query, where } from '@firebase/firestore';
import React, { useState } from 'react';

import { db } from '../../App';
import Container from '../../uiComponents/Container';
import FindRSVP from './FindRSVP';
import RSVPForm from './RSVPForm';

const RSVP = () => {
  const [invites, setInvites] = useState<any[]>([]);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const getInitialInvite = async (searchValue: string) => {
    const q = query(collection(db, 'person'), where('first', '==', searchValue));
    const querySnapshot = await getDocs(q);
    let personList: any[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      personList = [...personList, data];
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
    let personList: any[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      personList = [...personList, data];
    });
    setInvites(personList);
  };

  return (
    <Container>
      <h1>RSVP</h1>
      <FindRSVP getInvites={getInvites} resetIsNotFound={() => setIsNotFound(false)} />
      <RSVPForm invites={invites} />
      {isNotFound && <div>Not found.</div>}
    </Container>
  );
};

export default RSVP;
