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

const Us = () => {
  return (
    <div>
      <PageBackground />
      <BlackOverlay />
      <Container>
        <PageTitle>Us</PageTitle>
        <ImageList cols={4}>
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
      </Container>
    </div>
  );
};

export default Us;
