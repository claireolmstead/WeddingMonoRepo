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
  backgroundGradient: css`
    background: rgb(194, 183, 177)
      linear-gradient(0deg, rgba(194, 183, 177, 1) 0%, rgba(177, 187, 197, 1) 100%);
    background-size: cover;
    min-height: 100vh;
    position: fixed;
    top: 0;
    width: 100vw;
  `,
  backgroundBlackOverlay: css`
    background-color: rgba(0, 0, 0, 0.55);
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
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
