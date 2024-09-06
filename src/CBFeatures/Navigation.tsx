import styled from '@emotion/styled';
import { Menu } from '@mui/icons-material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ScreenSizes } from '../consts/vars';

const MenuItems = styled.div<{ isOpen: boolean }>`
  backdrop-filter: brightness(90%) blur(30px);
  display: flex;
  flex-direction: column;
  font-size: 45px;
  height: 100vh;
  left: 0;
  overflow-y: scroll;
  padding-top: 70px;
  position: fixed;
  top: 0;
  transform: ${(props) => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top left;
  transition: 0.4s ease-in-out;
  width: 100vw;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    font-size: 7vh;
  }
`;

const MenuOpenIcon = styled(Menu)`
  cursor: pointer;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 40px;
`;

const MenuCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  height: 40px;
  position: absolute;
  right: 20px;
  top: 20px;
  transition: 0.3s ease-in-out;
  width: 40px;

  &:hover {
    transform: rotate(90deg);
  }
`;

const NavLink = styled(Link)`
  ${(props) => props.theme.mixins.underlineHover};
  align-items: center;
  display: flex;
  letter-spacing: 8px;
  opacity: 45%;
  padding-left: 20px;
  padding-top: 20px;
  position: relative;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 100%;
    text-decoration: none;
  }

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    letter-spacing: 10px;
  }
`;

const ExternalLinkIcon = styled(ArrowOutwardIcon)`
  height: 30px;
  width: 30px;

  @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
    height: 50px;
    width: 50px;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  return (
    <>
      <MenuOpenIcon className="btn" onClick={handleOpen} />
      <MenuItems isOpen={isOpen}>
        <MenuCloseIcon className="btn" onClick={handleClose} />
        <NavLink to={'/'} onClick={handleClose}>
          Home
        </NavLink>
        <NavLink to={'/us'} onClick={handleClose}>
          Us
        </NavLink>
        <NavLink to={'/events'} onClick={handleClose}>
          Events
        </NavLink>
        <NavLink to={'/travel'} onClick={handleClose}>
          Travel
        </NavLink>
        <NavLink to={'/todo'} onClick={handleClose}>
          To Do
        </NavLink>
        <NavLink to={'/rsvp'} onClick={handleClose}>
          RSVP
        </NavLink>
        <NavLink to={'https://www.zola.com/registry/brooksandclaire2025'} target="_blank">
          Registry <ExternalLinkIcon />
        </NavLink>
      </MenuItems>
    </>
  );
};

export default Navigation;
