import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Context
import HotelsProvider from './store/HotelsProvider';
import ReservationProvider from './store/ReservationProvider';

// @Material UI
import Header from './components/layout/Header';

// Theme
import { ThemeProvider, Paper } from '@mui/material';
import { lightTheme, darkTheme } from './helpers/theme';

// Screens
const Home = lazy(() => import('./screens/Home'));
const Hotel = lazy(() => import('./screens/Hotel'));
const Reservation = lazy(() => import('./screens/Reservation'));

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <ReservationProvider>
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
              <Route
                path='reservation'
                element={
                  <Suspense fallback={<div>...loading</div>}>
                    <Reservation />
                  </Suspense>
                }
              />
              <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
          </HotelsProvider>
        </ReservationProvider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
