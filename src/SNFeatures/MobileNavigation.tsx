import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Box, Drawer } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/NSImages/Logo.png';

const MobileNavigationBlock = styled.div`
  position: absolute;
  right: 16px;
`;

const HamburgerMenuIcon = styled(DehazeIcon)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.7s;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;

const DrawerItems = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 90vw;

  .active {
    background-color: ${(props) => props.theme.colors.lightBlue};
  }
`;

const DrawerTopItem = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
`;

const DrawerLogo = styled.img`
  height: 40px;
`;

const ExitIcon = styled(CloseIcon)`
  color: ${(props) => props.theme.colors.blue};
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.pink};
  }
`;

const DrawerNavLink = styled(NavLink)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.green};
  padding: 20px;
  text-transform: uppercase;
  transition: all 0.5s;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.lightBlue};
    text-decoration: none;
  }

  &:visited {
    color: ${(props) => props.theme.colors.green};
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
            <DrawerNavLink to="/Lodging" onClick={() => setIsOpen(false)}>
              Pioneertown, CA
            </DrawerNavLink>
            <DrawerNavLink to="/rsvp" onClick={() => setIsOpen(false)}>
              RSVP
            </DrawerNavLink>
            <DrawerNavLink to="/registry" onClick={() => setIsOpen(false)}>
              Registry
            </DrawerNavLink>
          </DrawerItems>
        </Drawer>
      </Box>
    </MobileNavigationBlock>
  );
};

export default MobileNavigation;
