import styled from '@emotion/styled';
import React from 'react';

import SAndNImage from '../../images/Landing.jpeg';

const SNImage = styled.div<{ isLight: boolean }>`
  @keyframes slideIn {
    from {
      width: 0;
    }
    to {
      width: 40%;
    }
  }

  animation-duration: 1s;
  animation-name: slideIn;
  animation-timing-function: ease-out;
  background: url(${SAndNImage})
    ${(props) => (props.isLight ? `rgba(0, 0, 0, 0.1)` : `rgba(0, 0, 0, 0.8)`)} center center;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100vh;
  transition: background-color 0.75s;
  width: 40%;
`;

const AuthenticateImage = ({ isLight }: { isLight: boolean }) => {
  return <SNImage isLight={isLight} />;
};

export default AuthenticateImage;
