// Context
import HotelsProvider from './store/HotelsProvider';

// @Material UI
import Header from './components/layout/Header';

// Theme
import { ThemeProvider, Paper } from '@mui/material';
import { lightTheme, darkTheme } from './helpers/theme';

// Screens
import Home from './screens/Home';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <Header />
        <HotelsProvider>
          <Home />
        </HotelsProvider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
