import styled from '@emotion/styled';
import React from 'react';

import { ScreenSizes } from '../consts/vars';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StyleContainer = styled.div`
  box-sizing: border-box;
  max-width: 100vw;
  padding: 0 20px;
  position: relative;

  @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
    max-width: 2000px;
    margin: 0 auto;
  }
`;

const Container = ({ children, className }: ContainerProps) => {
  return <StyleContainer className={className}>{children}</StyleContainer>;
};

export default Container;
