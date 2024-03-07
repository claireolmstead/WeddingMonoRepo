import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';
import { CurInvitesContext } from '../context/CurInvitesContext';
import { Underline } from './Underline';

const FooterLogout = styled.div`
  ${Underline};
  cursor: pointer;
  margin: 80px 20px 20px 20px;
  text-align: right;
  z-index: 100;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    right: 0;
    position: fixed;
    bottom: 0;
    margin-top: 0;
  }
`;

const Footer = ({ setIsAuthenticated }: { setIsAuthenticated?: (value: boolean) => void }) => {
  const { setInvites, setIsNotMe, setHasAllRsvped } = useContext(CurInvitesContext);
  const navigate = useNavigate();

  const logout = () => {
    setIsAuthenticated && setIsAuthenticated(false);
    setInvites(undefined);
    setIsNotMe(false);
    setHasAllRsvped(false);
    window.localStorage.removeItem('curInvites');
    window.localStorage.setItem('isAuthenticated', 'false');
    navigate('/');
    window.scroll(0, 0);
  };

  return <FooterLogout onClick={logout}>LOGOUT</FooterLogout>;
};

export default Footer;
