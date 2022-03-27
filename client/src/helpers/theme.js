import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8a7955',
    },
    secondary: {
      main: '#1d2c38',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'secondary',
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8a7955',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1d2c38',
      contrastText: '#ffffff',
    },
    background: {
      default: '#1d2c38',
      paper: '#1d2c38',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'secondary',
      },
    },
  },
});

export { lightTheme, darkTheme };
