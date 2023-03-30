import { collection, getDocs, query, where } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '../../App';
import Container from '../../uiComponents/Container';
import PrimaryInput from '../../uiComponents/PrimaryInput';

const RSVP = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [invites, setInvites] = useState<any[]>([]);

  const getInitialInvite = async () => {
    const q = query(collection(db, 'person'), where('first', '==', inputValue));
    const querySnapshot = await getDocs(q);
    let personList: any[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      personList = [...personList, data];
    });
    return personList[0];
  };

  const getInvites = async () => {
    setInputValue('');
    const initialInvite = await getInitialInvite();

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
      <PrimaryInput
        value={inputValue}
        placeholder={'Jane Doe'}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={getInvites}>Search</button>
      {invites.map((person) => (
        <div key={person.id}>{person.first}</div>
      ))}
    </Container>
  );
};

export default RSVP;
