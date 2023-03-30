import type { Theme } from '@mui/material/styles';

import { CustomTheme } from './src/style/Theme';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {} // eslint-disable-line
}
