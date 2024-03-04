import styled from '@emotion/styled';
import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

import Container from '../../uiComponents/Container';
import { PageTitle } from '../../uiComponents/PageTitle';
import { usData } from './usData';

const PageBackground = styled.div`
  ${(props) => props.theme.mixins.backgroundGradient};
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const UsContainer = styled(Container)`
  padding: 0 60px;
`;

const Us = () => {
  return (
    <div>
      <PageBackground />
      <BlackOverlay />
      <UsContainer>
        <PageTitle>Us</PageTitle>
        <ImageList cols={3}>
          {usData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </UsContainer>
    </div>
  );
};

export default Us;
