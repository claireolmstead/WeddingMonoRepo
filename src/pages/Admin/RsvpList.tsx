import styled from '@emotion/styled';
import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { db } from '../../App';
import { Person } from '../../types';

const RsvpListBlock = styled.div`
  background-color: white;
  color: black;
`;

const RsvpList = () => {
  const [rsvpList, setRsvpList] = useState<Person[]>([]);

  useEffect(() => {
    const getPeople = async () => {
      const q = query(collection(db, 'person'), orderBy('partyId'));
      const querySnapshot = await getDocs(q);
      let people: Person[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        people = [...people, data as Person];
      });
      setRsvpList(people);
    };

    getPeople();
  }, []);

  return (
    <RsvpListBlock>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First</TableCell>
              <TableCell>Last</TableCell>
              <TableCell>Party ID</TableCell>
              <TableCell>Welcome</TableCell>
              <TableCell>Ceremony</TableCell>
              <TableCell>Pickleball</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rsvpList.map((rsvp) => (
              <TableRow key={`${rsvp.first}-${rsvp.last}-${rsvp.partyId}`}>
                <TableCell>{rsvp.first}</TableCell>
                <TableCell>{rsvp.last}</TableCell>
                <TableCell>{rsvp.partyId}</TableCell>
                <TableCell>{rsvp.welcome}</TableCell>
                <TableCell>{rsvp.ceremony}</TableCell>
                <TableCell>{rsvp.pickleball}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </RsvpListBlock>
  );
};

export default RsvpList;
