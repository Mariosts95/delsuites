import { createTheme } from '@mui/material/styles';

// TODO: Light theme is work in progress
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
      light: '#32616B',
      contrastText: '#ffffff',
    },
    background: {
      default: '#1d2c38',
      paper: '#1d2c38',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:900px)': {
        fontSize: '4rem',
      },
    },
    h3: {
      fontSize: '2rem',
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
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
