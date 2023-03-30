import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

import { colors } from './Colors';
import { mixins } from './Mixins';
import { type } from './Type';

const customTheme = {
  colors,
  mixins,
  type,
};

const muiTheme = createTheme();
export const theme: Theme = { ...muiTheme, ...customTheme };
export type CustomTheme = typeof customTheme;

export type ThemeColor = typeof customTheme.colors;
