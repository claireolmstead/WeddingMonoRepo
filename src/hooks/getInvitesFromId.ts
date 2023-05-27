import { collection, getDocs, query, where } from '@firebase/firestore';

import { db } from '../App';
import { Person } from '../types';

const getInitialInvite = async (id: string) => {
  const q = query(collection(db, 'person'), where('id', '==', id));
  const querySnapshot = await getDocs(q);
  let personList: Person[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    personList = [...personList, data as Person];
  });
  return personList[0];
};

export const getInvites = async (id: string) => {
  const initialInvite = await getInitialInvite(id);
  if (!initialInvite) {
    return;
  }

  const q = query(collection(db, 'person'), where('partyId', '==', initialInvite.partyId));
  const querySnapshot = await getDocs(q);
  let personList: Person[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    personList = [...personList, data as Person];
  });
  window.localStorage.setItem('curInvites', JSON.stringify(personList));
  return personList;
};
