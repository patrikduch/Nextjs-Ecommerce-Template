import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

declare module '@material-ui/core/styles/createTypography' {
  interface TypographyOptions {
    tab?: {
      fontFamily?: string;
      fontWeight?: number;
      fontSize?: string;
    }
  }
  interface Typography {
    tab?: {
      fontFamily?: string;
      fontWeight?: number;
      fontSize?: string;
    }
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`
    }
  },

  typography: {
    h1: {
      fontSize: '1.7em'
    },
    h2: {
      fontSize: '1.6em'
    },
    h3: {
      fontSize: '1.5em',
      fontWeight: 'unset'
    },
    tab: {
      fontWeight: 700,
      fontSize: '1rem'
    }
  }
});

export default theme;
