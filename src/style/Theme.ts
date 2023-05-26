import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';

import { colors } from './Colors';
import { mixins } from './Mixins';
import { MuiOverrides } from './MuiOverrides';
import { type } from './Type';

const customTheme = {
  colors,
  mixins,
  type,
};

const muiTheme = createTheme(MuiOverrides);
export const theme: Theme = { ...muiTheme, ...customTheme };
export type CustomTheme = typeof customTheme;

export type ThemeColor = typeof customTheme.colors;
