import { collection, getDocs, query, where } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';

import { db } from '../../App';

const InviteGroupList = ({ partyId, people }: { partyId?: number; people: any[] }) => {
  const [partyMembers, setPartyMembers] = useState<any[]>([]);

  useEffect(() => {
    const getInvite = async () => {
      const q = query(collection(db, 'person'), where('partyId', '==', partyId));
      const querySnapshot = await getDocs(q);
      let members: any[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        members = [...members, data];
      });
      setPartyMembers(members);
    };

    if (partyMembers.length !== people.length) {
      getInvite();
    }
  }, [partyId, partyMembers, people]);

  return (
    <>
      {!partyId ? (
        <div>Empty group.</div>
      ) : (
        <div>
          Party:
          {partyMembers.map((member, i) => (
            <div key={member.id + i}>
              {member.first} {member.last}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default InviteGroupList;
