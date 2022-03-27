// React
import { useState } from 'react';

// @Material UI
import Header from './components/layout/Header';

// Theme
import { ThemeProvider, Button, Paper, Typography, Box } from '@mui/material';
import { lightTheme, darkTheme } from './helpers/theme';

// Assets
import logo from './logo.svg';
import './App.css';

// Screens
import Home from './screens/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <Header />
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Typography variant='h1' align='center' gutterBottom>
            Hello Vite + React + MUI!
          </Typography>
          <Box>
            <Button
              variant='outlined'
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </Button>
          </Box>
        </header>
        <Home />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
