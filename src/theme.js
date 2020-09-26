const { createMuiTheme } = require('@material-ui/core');

const theme = createMuiTheme({
  palette: {

    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#3f51b5',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#F9B934',
      // dark: will be calculated from palette.secondary.main,
    },
    text: {
      primary: '#121037',
    }
  },
  typography: {
    fontFamily: `'Nunito', sans-serif`,
    subtitle2: {
      fontWeight: 600,
    },
  },
});

export default theme;
