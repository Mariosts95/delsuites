// Context
import { UseHotels } from '../store/HotelsProvider';

// @Material UI
import Grid from '@mui/material/Grid';

// Components
import HotelCard from '../components/UI/HotelCard';
import PageWrapper from '../components/UI/PageWrapper';
import CardsLoading from '../components/UI/CardsLoading';

const Home = () => {
  const { hotels, hotelsLoading } = UseHotels();

  // loading state
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
        {hotels.map((hotel, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
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
    </PageWrapper>
  );
};

export default Home;
