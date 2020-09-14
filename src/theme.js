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
      main: '#f5f5f5',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  typography: {
    subtitle2: {
      fontWeight: 600,
    },
  },
});

export default theme;
