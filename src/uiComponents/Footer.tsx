import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CurInvitesContext } from '../context/CurInvitesContext';

const FooterLogout = styled.div`
  bottom: 0;
  cursor: pointer;
  padding: 20px;
  position: fixed;
  right: 0;
  text-align: right;
  z-index: 100;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;

const Footer = ({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) => {
  const { setInvites, setIsNotMe, setHasAllRsvped } = useContext(CurInvitesContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuthenticated(false);
    setInvites(undefined);
    setIsNotMe(false);
    setHasAllRsvped(false);
    window.localStorage.removeItem('curInvites');
    window.localStorage.setItem('isAuthenticated', 'false');
    navigate('/');
  };

  return <FooterLogout onClick={logout}>LOGOUT</FooterLogout>;
};

export default Footer;
