import { colors } from './Colors';

export const MuiOverrides = {
  palette: {
    primary: {
      main: colors.red,
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: '0 0 10px 0',
          alignItems: 'flex-start',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.red,
          padding: '0 10px 0 0',
          fontSize: '30px',
        },
      },
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: colors.tan,
      },
    },
    MuiTab: {
      root: {
        '&:hover': {
          backgroundColor: colors.hoverRed,
          color: colors.red,
        },
      },
      selected: {
        color: colors.red,
        '&:hover': {
          color: colors.hoverRed,
        },
      },
    },
  },
};
