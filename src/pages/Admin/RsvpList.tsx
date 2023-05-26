import styled from '@emotion/styled';
import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { db } from '../../App';
import { Person } from '../../types';
import EditPerson from './EditPerson';

const RsvpListTableBody = styled(TableBody)`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
`;

const TableHeadCell = styled(TableCell)`
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => props.theme.colors.hoverDarkTan};
  }
`;

const RsvpListBlock = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.tan};
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
  width: 100%;
`;

const RsvpBodyTableRow = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const RsvpList = () => {
  const [rsvpList, setRsvpList] = useState<Person[]>([]);
  const [curEditPerson, setCurEditPerson] = useState<Person>();

  const getPeople = async (orderKey?: string) => {
    const q = query(collection(db, 'person'), orderBy(orderKey || 'partyId'));
    const querySnapshot = await getDocs(q);
    let people: Person[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      people = [...people, data as Person];
    });
    setRsvpList(people);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <RsvpListBlock>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell onClick={() => getPeople('first')}>First</TableHeadCell>
              <TableHeadCell onClick={() => getPeople('last')}>Last</TableHeadCell>
              <TableHeadCell onClick={() => getPeople('partyId')}>Party ID</TableHeadCell>
              <TableHeadCell onClick={() => getPeople('welcome')}>Welcome</TableHeadCell>
              <TableHeadCell onClick={() => getPeople('ceremony')}>Ceremony</TableHeadCell>
              <TableHeadCell onClick={() => getPeople('pickleball')}>Pickleball</TableHeadCell>
            </TableRow>
          </TableHead>

          <RsvpListTableBody>
            {rsvpList.map((rsvp) => (
              <RsvpBodyTableRow
                key={`${rsvp.first}-${rsvp.last}-${rsvp.partyId}`}
                onClick={() => setCurEditPerson(rsvp)}
              >
                <TableCell>{rsvp.first}</TableCell>
                <TableCell>{rsvp.last}</TableCell>
                <TableCell>{rsvp.partyId}</TableCell>
                <TableCell>{rsvp.welcome}</TableCell>
                <TableCell>{rsvp.ceremony}</TableCell>
                <TableCell>{rsvp.pickleball}</TableCell>
              </RsvpBodyTableRow>
            ))}
          </RsvpListTableBody>
        </Table>
      </TableContainer>

      <EditPerson
        isOpen={!!curEditPerson}
        handleClose={() => setCurEditPerson(undefined)}
        person={curEditPerson}
      />
    </RsvpListBlock>
  );
};

export default RsvpList;
