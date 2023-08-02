import React, { createContext, useEffect, useState } from 'react';

import { hasAllResponded } from '../hooks/hasAllResponded';
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

  useEffect(() => {
    const curInvites = window.localStorage.getItem('curInvites');
    if (curInvites) {
      setInvites(JSON.parse(curInvites));
    }
  }, []);

  useEffect(() => {
    if (!invites || invites.length < 1) return;
    window.localStorage.setItem('curInvites', JSON.stringify(invites));

    const hasRsvped = hasAllResponded(invites);
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
