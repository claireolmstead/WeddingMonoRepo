import React from 'react';

import { Person } from '../../types';
import RSVPForm from './RSVPForm';

interface RSVPFormListProps {
  invites: Person[];
}

const RSVPFormList = ({ invites }: RSVPFormListProps) => {
  return (
    <>
      {invites?.map((person) => (
        <RSVPForm person={person} key={person.id} />
      ))}
    </>
  );
};

export default RSVPFormList;
