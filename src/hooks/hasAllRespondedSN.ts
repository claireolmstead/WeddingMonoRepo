import { Person } from '../types';

export const hasAllRespondedSN = (invites: Person[]): boolean => {
  const hasResponded: boolean[] = invites.map((person) => {
    return !!person.welcome && !!person.ceremony && !!person.pickleball;
  });

  return hasResponded.every((response) => response);
};

export const hasAllRespondedCB = (invites: Person[]): boolean => {
  const hasResponded: boolean[] = invites.map((person) => {
    console.log(invites);
    return !!person.welcome && !!person.ceremony && !!person.beachDay;
  });

  return hasResponded.every((response) => response);
};
