import styled from '@emotion/styled';
import { ImageList, ImageListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { ScreenSizes } from '../../consts/vars';
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
  //padding: 0 60px;
`;

const Overlay = styled.div`
  align-items: start;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  height: 100%;
  justify-content: start;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;

  &:hover {
    opacity: 1;
  }
`;

const ImageListItemBlock = styled(ImageListItem)`
  display: inline-block;
  position: relative;
`;

const UsOverlayText = styled.div`
  font-weight: bold;
  padding: 8px;
`;

const UsOverlayTitle = styled.div`
  ${(props) => props.theme.type.cb_body};
  padding-bottom: 8px;
  text-transform: uppercase;
`;

const UsOverlayBody = styled.div`
  ${(props) => props.theme.type.cb_body_italics};
  letter-spacing: 1px;
`;

const Us = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getColCount = () => {
    if (windowSize < ScreenSizes.MOBILE) {
      return 1;
    } else if (windowSize < ScreenSizes.TABLET) {
      return 2;
    } else {
      return 3;
    }
  };

  return (
    <div>
      <PageBackground />
      <BlackOverlay />
      <UsContainer>
        <PageTitle>Us</PageTitle>
        <ImageList cols={getColCount()}>
          {usData
            .slice(0)
            .reverse()
            .map((item, i) => (
              <ImageListItemBlock
                key={item.img}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                {hoveredIndex === i && (
                  <Overlay>
                    <UsOverlayText>
                      <UsOverlayTitle>{item.title}</UsOverlayTitle>
                      <UsOverlayBody>{item.description}</UsOverlayBody>
                    </UsOverlayText>
                  </Overlay>
                )}
              </ImageListItemBlock>
            ))}
        </ImageList>
      </UsContainer>
    </div>
  );
};

export default Us;
