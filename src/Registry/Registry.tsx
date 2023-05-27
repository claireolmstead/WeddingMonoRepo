import styled from '@emotion/styled';
import React from 'react';

import Container from '../uiComponents/Container';
import PrimaryButton from '../uiComponents/PrimaryButton';

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
      <RegistryContainer>
        <h2>
          Your presence means the world to us and is all we ask for. If you&apos;d still like to
          contribute to our registry, please use the links below.
        </h2>
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
