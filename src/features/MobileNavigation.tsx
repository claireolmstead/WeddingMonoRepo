import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Box, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/Logo.svg';

const MobileNavigationBlock = styled.div`
  position: absolute;
  right: 16px;
`;

const HamburgerMenuIcon = styled(DehazeIcon)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.7s;

  &:hover {
    color: ${(props) => props.theme.colors.red};
  }
`;

const DrawerItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 90vw;

  .active {
    background-color: ${(props) => props.theme.colors.tan};
  }
`;

const DrawerTopItem = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
`;

const DrawerLogo = styled.img`
  background-color: ${(props) => props.theme.colors.lightGray};
  height: 40px;
`;

const ExitIcon = styled(CloseIcon)`
  cursor: pointer;
`;

const DrawerNavLink = styled(NavLink)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  padding: 20px;
  transition: all 0.5s;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.tan};
    text-decoration: none;
  }

  &:visited {
    color: ${(props) => props.theme.colors.black};
  }
`;

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <MobileNavigationBlock>
      <HamburgerMenuIcon onClick={() => setIsOpen(true)} />
      <Box role="presentation" onClick={() => setIsOpen(false)} onKeyDown={() => setIsOpen(false)}>
        <Drawer open={isOpen} anchor="right">
          <DrawerItems>
            <DrawerTopItem>
              <DrawerLogo src={Logo} alt={'N+S'} />
              <ExitIcon onClick={() => setIsOpen(false)} />
            </DrawerTopItem>
            <DrawerNavLink to="/home" onClick={() => setIsOpen(false)}>
              Home
            </DrawerNavLink>
            <DrawerNavLink to="/schedule" onClick={() => setIsOpen(false)}>
              Schedule
            </DrawerNavLink>
            <DrawerNavLink to="/accommodations" onClick={() => setIsOpen(false)}>
              Accommodations
            </DrawerNavLink>
            <DrawerNavLink to="/rsvp" onClick={() => setIsOpen(false)}>
              RSVP
            </DrawerNavLink>
            <DrawerNavLink to="/us" onClick={() => setIsOpen(false)}>
              US
            </DrawerNavLink>
          </DrawerItems>
        </Drawer>
      </Box>
    </MobileNavigationBlock>
  );
};

export default MobileNavigation;
