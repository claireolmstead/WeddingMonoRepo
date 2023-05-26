import { css } from '@emotion/react';

import { ScreenSizes } from '../consts/vars';

export const type = {
  main_title: css`
    font-family: 'kiln-sans', sans-serif;
    font-size: 60px;

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 75px;
    }

    @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
      font-size: 90px;
    }
  `,
  sub_title: css`
    font-family: 'kiln-sans', sans-serif;
    font-size: 28px;
  `,
  main_body: css`
    font-family: 'futura', sans-serif;
  `,
};
