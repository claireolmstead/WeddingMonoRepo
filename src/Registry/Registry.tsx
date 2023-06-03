import styled from '@emotion/styled';
import React from 'react';

import RegistryBackgroundImg from '../images/wideshot/RegistryBackground.jpg';
import Container from '../uiComponents/Container';
import PrimaryButton from '../uiComponents/PrimaryButton';

const RegistryBackground = styled.img`
  ${(props) => props.theme.mixins.backgroundImage};
  background-image: url(${RegistryBackgroundImg});
`;

const RegistryContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
  position: relative;
  text-align: center;
`;

const Registry = () => {
  return (
    <>
      <RegistryBackground />
      <RegistryContainer>
        <a
          href={
            'https://www.bloomingdales.com/registry/wedding/guest/STERLING-OLMSTEAD-NICK-REYNOLDS/?registryId=7437693'
          }
          rel={'noreferrer'}
          target={'_blank'}
        >
          <PrimaryButton>Bloomingdales</PrimaryButton>
        </a>
        <a
          href={'https://registry.neimanmarcus.com/viewRegistry?regId=99076572'}
          rel={'noreferrer'}
          target={'_blank'}
        >
          <PrimaryButton>Neiman Marcus</PrimaryButton>
        </a>
      </RegistryContainer>
    </>
  );
};

export default Registry;
