import { Person } from '../types';

export const hasAllResponded = (invites: Person[]): boolean => {
  const hasResponded: boolean[] = invites.map((person) => {
    return !!person.welcome && !!person.ceremony && !!person.pickleball;
  });

  return hasResponded.every((response) => response);
};
