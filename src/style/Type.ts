import { css } from '@emotion/react';

import { ScreenSizes } from '../consts/vars';

// const SNTitleFont = css`
//   font-family: 'filmotype-western', serif;
//   letter-spacing: 8px;
//   text-transform: uppercase;
// `;
//
// const SNBodyFont = css`
//   font-family: 'futura', sans-serif;
// `;

const CBTitleFont = css`
  font-family: 'liza-display-new', sans-serif;
`;

const CBBodyFont = css`
  font-family: 'itc-avant-garde-gothic-pro', sans-serif;
`;

const TitleFont = CBTitleFont;
const PageTitleFont = CBBodyFont;
const BodyFont = CBBodyFont;

export const type = {
  main_title: css`
    ${TitleFont};
    font-size: 24px;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 30px;
    }

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 40px;
    }

    @media only screen and (min-width: ${ScreenSizes.WIDESCREEN}px) {
      font-size: 50px;
    }
  `,
  sub_title: css`
    ${TitleFont};
    font-size: 20px;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 24px;
    }

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 28px;
    }
  `,
  page_title: css`
    ${PageTitleFont};
    font-size: 24px;
    text-transform: uppercase;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 28px;
    }

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 36px;
    }
  `,
  large_page_title: css`
    ${TitleFont};
    font-size: 32px;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 38px;
    }

    @media only screen and (min-width: ${ScreenSizes.DESKTOP}px) {
      font-size: 50px;
    }
  `,
  sub_page_title: css`
    ${BodyFont};
    font-size: 18px;
    font-weight: bold;

    @media only screen and (min-width: ${ScreenSizes.TABLET}px) {
      font-size: 22px;
    }
  `,
  main_body: css`
    ${BodyFont};
  `,
};
