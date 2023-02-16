import { Theme } from '@emotion/react';

import { colors } from './Colors';
import { mixins } from './Mixins';
import { typography } from './Typography';

const customTheme = {
  colors,
  mixins,
  typography,
};

export const theme: Theme = customTheme;
export type CustomTheme = typeof customTheme;

export type ThemeColor = typeof customTheme.colors;
export type ThemeTypography = typeof customTheme.typography;
