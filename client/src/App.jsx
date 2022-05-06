import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Context
import HotelsProvider from './store/HotelsProvider';

// @Material UI
import Header from './components/layout/Header';

// Theme
import { ThemeProvider, Paper } from '@mui/material';
import { lightTheme, darkTheme } from './helpers/theme';

// Screens
const Home = lazy(() => import('./screens/Home'));
const Hotel = lazy(() => import('./screens/Hotel'));

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <Header />
        <HotelsProvider>
          <Routes>
            <Route
              path='/'
              element={
                <Suspense fallback={<div>...loading</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path='hotel/:id'
              element={
                <Suspense fallback={<div>...loading</div>}>
                  <Hotel />
                </Suspense>
              }
            />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </HotelsProvider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
