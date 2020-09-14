const { createMuiTheme } = require('@material-ui/core');

const theme = createMuiTheme({
  typography: {
    subtitle2: {
      fontWeight: 600,
    },
  },
  text: {
    tertiary: '#ff0000',
  },
});

export default theme;
