import { CustomTheme } from './src/style/Theme';

declare module '@emotion/react' {
    export interface Theme extends CustomTheme {} // eslint-disable-line
}
