import { css } from '@emotion/react';

import { ScreenSizes } from '../consts/vars';

export const type = {
  main_title: css`
    font-family: 'filmotype-western', serif;
    font-size: 1.4em;
    letter-spacing: 8px;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 1.8em;
    }

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 50px;
    }

    @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
      font-size: 60px;
    }
  `,
  sub_title: css`
    font-family: 'filmotype-western', serif;
    font-size: 22px;
    letter-spacing: 3px;
    text-transform: uppercase;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 28px;
    }
  `,
  page_title: css`
    font-family: 'futura', sans-serif;
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 32px;
    }
  `,
  sub_page_title: css`
    font-family: 'futura', sans-serif;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 22px;
    }
  `,
  main_body: css`
    font-family: 'futura', sans-serif;
  `,
};
