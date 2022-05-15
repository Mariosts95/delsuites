import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

// Context
import { UseReservation } from '../../store/ReservationProvider';

// @Material UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// Assets
import logo from '/images/delsuites-logo.svg';

const Header = () => {
  const { reservation } = UseReservation();

  const location = useLocation();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Link
              to='/'
              className='logo'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <img
                style={{ maxWidth: '3rem', width: '100%', mr: '1rem' }}
                src={logo}
                alt='logo'
              />
              <Typography
                variant='h6'
                color='primary'
                sx={{
                  fontFamily: 'Montserrat Light Alt1',
                  textTransform: 'uppercase',
                }}
              >
                delsuites
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link to='/'>
              {reservation.checkIn && reservation.checkOut ? (
                <Typography
                  variant='body1'
                  color='text.secondary'
                  sx={{ mr: 2 }}
                >
                  CheckIn: {format(reservation.checkIn, 'd LLL yyyy')} -
                  CheckOut: {format(reservation.checkOut, 'd LLL yyyy')}
                </Typography>
              ) : (
                <></>
              )}
            </Link>
          </Grid>
          {reservation.reachedCheckout && location.pathname !== '/reservation' && (
            <Grid item>
              <Link to='/reservation'>
                <Button variant='contained'>Reservation</Button>
              </Link>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
