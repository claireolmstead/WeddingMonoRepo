import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

import { colors } from './Colors';
import { mixins } from './Mixins';
import { typography } from './Typography';

const customTheme = {
  colors,
  mixins,
  typography,
};

const muiTheme = createTheme();
export const theme: Theme = { ...muiTheme, ...customTheme };
export type CustomTheme = typeof customTheme;

export type ThemeColor = typeof customTheme.colors;
export type ThemeTypography = typeof customTheme.typography;
