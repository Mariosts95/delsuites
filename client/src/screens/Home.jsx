import { Link } from 'react-router-dom';

// Context
import { UseReservation } from '../store/ReservationProvider';
import { UseHotels } from '../store/HotelsProvider';

// @Material UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Components
import DatePicker from '../components/UI/DatePicker';
import PageWrapper from '../components/UI/PageWrapper';

const Home = () => {
  const { reservation } = UseReservation();
  const { updateHotelsPages, changeHotelsCurrentPage } = UseHotels();

  return (
    <PageWrapper>
      <Typography variant='h3' component='h1' align='center' gutterBottom>
        Please select your dates
      </Typography>
      <Grid container justifyContent={'center'} spacing={3} color='#000'>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <DatePicker />
        </Grid>
      </Grid>
      <Link
        to={`${reservation.nights > 0 ? 'hotels' : '/'}`}
        style={{ display: 'block', maxWidth: 'fit-content', margin: '0 auto' }}
        onClick={() => {
          if (reservation.nights > 0) {
            updateHotelsPages();
            changeHotelsCurrentPage(1); // reset to first page after added new dates
          }
        }}
      >
        <Button
          variant='contained'
          sx={{ display: 'block', p: 2, my: 3, mx: 'auto' }}
          disabled={reservation.nights > 0 ? false : true}
        >
          <Typography variant='body1' color='text.secondary'>
            Show me the hotels
          </Typography>
        </Button>
      </Link>
    </PageWrapper>
  );
};

export default Home;
