import { doc, setDoc } from '@firebase/firestore';
import React, { useState } from 'react';

import { db } from '../../App';
import PrimaryInput from '../../uiComponents/PrimaryInput';
import InviteGroupList from './InviteGroupList';
import RsvpList from './RsvpList';

const Admin = () => {
  const [isNewParty, setIsNewParty] = useState(false);
  const [partyId, setPartyId] = useState(0);
  const initialPerson = { first: '', last: '', id: '', partyId: 0, isAttending: false };
  const [person, setPerson] = useState<typeof initialPerson>(initialPerson);
  const [people, setPeople] = useState<(typeof initialPerson)[]>([]);

  const setInvite = async () => {
    const personId = (person.first + person.last).toLowerCase();
    const docRef = doc(db, 'person', `${personId}`);
    let curPartyId = person.partyId;
    if (curPartyId === initialPerson.partyId) {
      curPartyId = Math.floor(Math.random() * 1000000 + 1);
      setPartyId(curPartyId);
    }
    const data = { ...person, id: personId, partyId: curPartyId };
    setDoc(docRef, data)
      .then(() => {
        console.log('Document has been added successfully');
      })
      .catch((error) => {
        console.log(error);
      });
    setPeople([...people, data]);
    setPerson({ ...initialPerson, partyId: curPartyId });
  };

  const handleOnChange = (value: string | boolean, key: string) => {
    setPerson({ ...person, [key]: value });
  };

  const finishGroup = () => {
    setIsNewParty(false);
    setPerson(initialPerson);
    setPeople([]);
  };

  return (
    <div>
      {!isNewParty ? (
        <button onClick={() => setIsNewParty(true)}>Create a new invite group</button>
      ) : (
        <>
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
          <button onClick={setInvite}>Add Person</button>
          <button onClick={finishGroup}>Done</button>
          <InviteGroupList partyId={partyId} people={people} />
        </>
      )}

      <RsvpList />
    </div>
  );
};

export default Admin;