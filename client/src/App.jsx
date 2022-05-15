import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Context
import HotelsProvider from './store/HotelsProvider';
import ReservationProvider from './store/ReservationProvider';

// @Material UI
import Header from './components/layout/Header';

// Theme
import { ThemeProvider, Paper } from '@mui/material';
import { darkTheme } from './helpers/theme';

// Components
import Spinner from './components/UI/Spinner';
import CardsLoading from './components/UI/CardsLoading';
import ProtectedRoute from './components/ProtectedRoute';

// Screens
const Home = lazy(() => import('./screens/Home'));
const HotelsList = lazy(() => import('./screens/HotelsList'));
const Hotel = lazy(() => import('./screens/Hotel'));
const Reservation = lazy(() => import('./screens/Reservation'));
const NotFound = lazy(() => import('./screens/NotFound'));

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
                  <Suspense fallback={<Spinner />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path='hotels'
                element={
                  <Suspense fallback={<CardsLoading />}>
                    <HotelsList />
                  </Suspense>
                }
              />
              <Route
                path='hotel/:id'
                element={
                  <Suspense fallback={<Spinner />}>
                    <Hotel />
                  </Suspense>
                }
              />
              <Route
                path='reservation'
                element={
                  <Suspense fallback={<Spinner />}>
                    <ProtectedRoute>
                      <Reservation />
                    </ProtectedRoute>
                  </Suspense>
                }
              />
              <Route
                path='*'
                element={
                  <Suspense fallback={<Spinner />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </HotelsProvider>
        </ReservationProvider>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
