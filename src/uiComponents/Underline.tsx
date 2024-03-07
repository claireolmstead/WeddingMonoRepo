import { css } from '@emotion/react';

export const Underline = css`
  color: white;
  display: inline-block;
  position: relative;
  text-decoration: none;
  width: fit-content;

  &::after {
    background-color: white;
    bottom: 0;
    content: '';
    height: 0.1em;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    width: 100%;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
