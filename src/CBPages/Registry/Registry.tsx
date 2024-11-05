import styled from '@emotion/styled';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from 'react';

import { ScreenSizes } from '../../consts/vars';
import RegImg from '../../images/CBImages/Registry.jpg';
import BCPrimaryButton from '../../uiComponents/BCPrimaryButton';
import Container from '../../uiComponents/Container';
import { PageTitle } from '../../uiComponents/PageTitle';

const RegistryBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RegImg});
  background-position: top;

  @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
    background-position: center;
  }
`;

const RegistryBlock = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

const RegistryButton = styled(BCPrimaryButton)`
  border-radius: 25px;
  font-size: 30px;
  height: 50px;
  max-width: 100%;

  @media only screen and (max-width: ${ScreenSizes.TABLET}px) {
    font-size: 20px;
  }
`;

const RegistryLink = styled.a`
  align-items: center;
  display: flex;
  gap: 10px;

  &:hover {
    text-decoration: none;
  }
`;

const ExternalLinkIcon = styled(ArrowOutwardIcon)`
  height: 30px;
  width: 30px;
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const Registry = () => {
  return (
    <>
      <RegistryBackground />
      <BlackOverlay />
      <RegistryBlock>
        <PageTitle>Registry</PageTitle>
        <RegistryButton>
          <RegistryLink
            href={'https://www.zola.com/registry/brooksandclaire2025'}
            target="_blank"
            rel="noreferrer"
          >
            Zola
            <ExternalLinkIcon />
          </RegistryLink>
        </RegistryButton>
        <RegistryButton>
          <RegistryLink
            href={'https://www.bloomingdales.com/registry/Claire-Olmstead-Brooks-Clark/2521932'}
            target="_blank"
            rel="noreferrer"
          >
            Bloomingdale&apos;s
            <ExternalLinkIcon />
          </RegistryLink>
        </RegistryButton>
      </RegistryBlock>
    </>
  );
};

export default Registry;
