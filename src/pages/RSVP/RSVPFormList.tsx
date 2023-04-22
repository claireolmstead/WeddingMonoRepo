import React from 'react';

import { Person } from '../../types';
import RSVPForm from './RSVPForm';

interface RSVPFormListProps {
  invites: Person[];
  onSuccess: () => Promise<void>;
}

const RSVPFormList = ({ invites, onSuccess }: RSVPFormListProps) => {
  return (
    <>
      {invites?.map((person) => (
        <RSVPForm person={person} key={person.id} onSuccess={onSuccess} />
      ))}
    </>
  );
};

export default RSVPFormList;
