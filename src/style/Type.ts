import { css } from '@emotion/react';

import { ScreenSizes } from '../consts/vars';

export const type = {
  main_title: css`
    font-family: 'kiln-sans', sans-serif;
    font-size: 60px;

    @media only screen and (min-width: ${ScreenSizes.MOBILE}px) {
      font-size: 90px;
    }
  `,
  main_body: css`
    font-family: 'futura', sans-serif;
  `,
};
