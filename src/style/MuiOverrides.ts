import { colors } from './Colors';

export const MuiOverrides = {
  palette: {
    primary: {
      main: colors.white,
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
          color: colors.orange,
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
          color: colors.orange,
        },
      },
      selected: {
        color: colors.orange,
        '&:hover': {
          color: colors.orange,
        },
      },
    },
  },
};
