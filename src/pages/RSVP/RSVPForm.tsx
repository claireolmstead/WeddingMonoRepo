import { doc, setDoc } from '@firebase/firestore';
import React from 'react';

import { db } from '../../App';

interface RSVPFormProps {
  invites: any[];
}

const RSVPForm = ({ invites }: RSVPFormProps) => {
  const rsvp = (isAttending: boolean, person: { first: any; last: any; partyId: any }) => {
    const personId = (person.first + person.last).toLowerCase();
    const docRef = doc(db, 'person', `${personId}`);
    const data = { ...person, isAttending: isAttending };
    setDoc(docRef, data)
      .then(() => {
        console.log('Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {invites?.map((person) => (
        <>
          <div key={person.id}>
            {person.first} {person.last}
          </div>
          <button onClick={() => rsvp(true, person)}>Yes</button>
          <button onClick={() => rsvp(false, person)}>No</button>
        </>
      ))}
    </>
  );
};

export default RSVPForm;
