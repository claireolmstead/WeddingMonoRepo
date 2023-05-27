import styled from '@emotion/styled';
import React from 'react';

const SNImageBlock = styled.div<{ isLight: boolean }>`
  //@keyframes slideIn {
  //  from {
  //    width: 0;
  //  }
  //  to {
  //    width: 40%;
  //  }
  //}

  animation-duration: 1s;
  animation-name: slideIn;
  animation-timing-function: ease-out;
  background: ${(props) => (props.isLight ? `rgba(0, 0, 0, 0.1)` : `rgba(0, 0, 0, 0.8)`)} center
    center;
  background-blend-mode: multiply;
  background-size: cover;
  height: 100vh;
  padding-top: 20px;
  text-orientation: mixed;
  transition: background-color 0.75s;
  width: 40%;
  ${(props) => props.theme.type.main_title};
  writing-mode: vertical-lr;
`;

const AuthenticateImage = ({ isLight }: { isLight: boolean }) => {
  return (
    <SNImageBlock isLight={isLight}>
      <div>Sterling</div>
      <div>Nick</div>
    </SNImageBlock>
  );
};

export default AuthenticateImage;
