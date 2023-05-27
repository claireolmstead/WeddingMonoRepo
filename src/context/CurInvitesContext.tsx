import React, { createContext, useEffect, useState } from 'react';

import { hasAllResponded } from '../hooks/hasAllResponded';
import { Person } from '../types';

export type CurInvitesType = {
  invites?: Person[];
  setInvites: (invites?: Person[]) => void;
  hasAllRsvped: boolean;
  isNotMe: boolean;
  setIsNotMe: (isNotMe: boolean) => void;
};

type Props = {
  children: React.ReactNode;
};

export const CurInvitesContext = createContext<CurInvitesType>({
  setInvites: () => undefined,
  hasAllRsvped: false,
  isNotMe: false,
  setIsNotMe: () => undefined,
});

const CurInvitesContextProvider = ({ children }: Props): JSX.Element => {
  const [invites, setInvites] = useState<Person[] | undefined>([]);
  const [isNotMe, setIsNotMe] = useState<boolean>(false);
  const [hasAllRsvped, setHasAllRsvped] = useState<boolean>(false);

  useEffect(() => {
    const curInvites = window.localStorage.getItem('curInvites');
    console.log(curInvites);
    if (curInvites) {
      setInvites(JSON.parse(curInvites));
    }
  }, []);

  useEffect(() => {
    if (!invites) return;
    const hasRsvped = hasAllResponded(invites);
    setHasAllRsvped(hasRsvped);
  }, [invites]);

  const defaultValue: CurInvitesType = {
    invites,
    setInvites,
    hasAllRsvped,
    isNotMe,
    setIsNotMe,
  };

  return <CurInvitesContext.Provider value={defaultValue}>{children}</CurInvitesContext.Provider>;
};

export default CurInvitesContextProvider;
