import styled from '@emotion/styled';
import { Menu } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItems = styled.div<{ isOpen: boolean }>`
  backdrop-filter: brightness(90%) blur(30px);
  display: flex;
  flex-direction: column;
  font-size: 9vh;
  height: 100vh;
  left: 0;
  padding-top: 70px;
  position: fixed;
  top: 0;
  transform: ${(props) => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top left;
  transition: 0.4s ease-in-out;
  width: 100vw;
`;

const MenuOpenIcon = styled(Menu)`
  cursor: pointer;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;
`;

const MenuCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  height: 40px;
  position: fixed;
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
  opacity: 45%;
  padding-left: 20px;
  position: relative;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 100%;
    text-decoration: none;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MenuOpenIcon onClick={handleOpen} />
      <MenuItems isOpen={isOpen}>
        <MenuCloseIcon onClick={handleClose} />
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
        <NavLink to={'/registry'} onClick={handleClose}>
          Registry
        </NavLink>
        <NavLink to={'/rsvp'} onClick={handleClose}>
          RSVP
        </NavLink>
      </MenuItems>
    </>
  );
};

export default Navigation;
