import { css } from '@emotion/react';

import { ScreenSizes } from '../consts/vars';

export const type = {
  main_title: css`
    font-family: 'filmotype-western', serif;
    font-size: 24px;
    letter-spacing: 8px;
    text-transform: uppercase;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 30px;
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
    font-size: 20px;
    letter-spacing: 3px;
    text-transform: uppercase;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 24px;
    }

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 28px;
    }
  `,
  page_title: css`
    font-family: 'filmotype-western', serif;
    font-size: 24px;
    letter-spacing: 8px;
    text-transform: uppercase;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 28px;
    }

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 36px;
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
