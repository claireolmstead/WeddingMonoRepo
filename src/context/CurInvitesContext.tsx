import React, { createContext, useEffect, useState } from 'react';

import { getInvites } from '../hooks/getInvitesFromId';
import { hasAllRespondedSN } from '../hooks/hasAllRespondedSN';
import { Person } from '../types';

export type CurInvitesType = {
  invites?: Person[];
  setInvites: (invites?: Person[]) => void;
  hasAllRsvped: boolean;
  isNotMe: boolean;
  setIsNotMe: (isNotMe: boolean) => void;
  setHasAllRsvped: (hasRSVP: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

export const defaultValue = {
  setInvites: () => undefined,
  hasAllRsvped: false,
  isNotMe: false,
  setIsNotMe: () => undefined,
  setHasAllRsvped: () => undefined,
};

export const CurInvitesContext = createContext<CurInvitesType>(defaultValue);

const CurInvitesContextProvider = ({ children }: Props): JSX.Element => {
  const [invites, setInvites] = useState<Person[] | undefined>([]);
  const [isNotMe, setIsNotMe] = useState<boolean>(false);
  const [hasAllRsvped, setHasAllRsvped] = useState<boolean>(false);

  const getUpdatedInvite = async (person: Person): Promise<Person | null> => {
    if (person?.isInvitedToRehearsal === undefined) {
      const updatedPerson = (await getInvites(person.id))?.[0];

      if (!updatedPerson) return null;

      if (updatedPerson?.isInvitedToRehearsal === undefined)
        updatedPerson.isInvitedToRehearsal = false;

      return updatedPerson;
    }
    return person;
  };

  useEffect(() => {
    const updateAll = async () => {
      const curInvites = window.localStorage.getItem('curInvites');
      if (curInvites) {
        const inviteGroup: Person[] = JSON.parse(curInvites);
        // Use Promise.all to wait for all getUpdatedInvite promises to resolve
        const updatedInvites = await Promise.all(
          inviteGroup.map((p) => {
            const person = getUpdatedInvite(p);
            if (person !== null) return person;
          })
        );
        setInvites(updatedInvites as Person[]);
      }
    };
    updateAll();
  }, []);

  useEffect(() => {
    if (!invites || invites.length < 1) return;
    window.localStorage.setItem('curInvites', JSON.stringify(invites));

    const hasRsvped = hasAllRespondedSN(invites);
    setHasAllRsvped(hasRsvped);
  }, [invites]);

  const defaultValue: CurInvitesType = {
    invites,
    setInvites,
    hasAllRsvped,
    isNotMe,
    setIsNotMe,
    setHasAllRsvped,
  };

  return <CurInvitesContext.Provider value={defaultValue}>{children}</CurInvitesContext.Provider>;
};

export default CurInvitesContextProvider;
