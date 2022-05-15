// Context
import { UseHotels } from '../store/HotelsProvider';

// @Material UI
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

// Components
import HotelCard from '../components/UI/HotelCard';
import PageWrapper from '../components/UI/PageWrapper';
import CardsLoading from '../components/UI/CardsLoading';

const Home = () => {
  const {
    hotels,
    hotelsLoading,
    hotelsPages,
    hotelsCurrentPage,
    changeHotelsCurrentPage,
  } = UseHotels();

  // safeguard against empty data
  if (hotelsLoading) {
    return (
      <PageWrapper>
        <CardsLoading />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Grid container spacing={3}>
        {hotels.map((hotel) => (
          <Grid key={hotel._id} item xs={12} sm={6} xl={4}>
            <HotelCard
              id={hotel.hotelId}
              name={hotel.name}
              description={hotel.description.short}
              images={hotel.images}
              location={hotel.location}
              address={hotel.address}
              starRating={hotel.starRating}
              roomsNumber={hotel.roomCount}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Pagination
            count={hotelsPages}
            page={hotelsCurrentPage}
            onChange={(event, value) => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              changeHotelsCurrentPage(value);
            }}
            color='primary'
            size='large'
            sx={{ display: 'flex', justifyContent: 'center', p: 5 }}
          />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Home;
