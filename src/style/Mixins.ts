import { css } from '@emotion/react';

export const mixins = {
  backgroundImage: css`
    background: no-repeat center center;
    background-size: cover;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100vw;
  `,
  underlineHover: css`
    &::before {
      background-color: #ffffff;
      bottom: 0;
      content: '';
      display: block;
      height: 3px;
      left: 0;
      position: absolute;
      transform: scaleX(0);
      transition: transform 0.4s ease;
      transform-origin: top left;
      width: 100%;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  `,
};
