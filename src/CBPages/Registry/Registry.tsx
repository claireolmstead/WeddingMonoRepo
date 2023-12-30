import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import RegImg from '../../images/CBImages/Registry.jpg';

const RegistryBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RegImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const Registry = () => {
  return (
    <>
      <RegistryBackground />
      Registry
    </>
  );
};

export default Registry;
