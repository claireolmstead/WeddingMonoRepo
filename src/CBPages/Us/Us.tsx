import styled from '@emotion/styled';
import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

import { usData } from './usData';

const PageBackground = styled.div`
  ${(props) => props.theme.mixins.backgroundGradient};
`;

const BlackOverlay = styled.div`
  ${(props) => props.theme.mixins.backgroundBlackOverlay};
`;

const PageBody = styled.div`
  position: relative;
`;

const PageTitle = styled.div`
  ${(props) => props.theme.type.sn_page_title};
`;

const Us = () => {
  return (
    <div>
      <PageBackground />
      <BlackOverlay />
      <PageBody>
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
      </PageBody>
    </div>
  );
};

export default Us;
