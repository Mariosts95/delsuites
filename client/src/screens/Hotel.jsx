import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Services
import { fetchHotel } from '../services/hotels';

// Context
import { UseReservation } from '../store/ReservationProvider';

// @Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

// Components
import PageWrapper from '../components/UI/PageWrapper';
import RoomCard from '../components/UI/RoomCard';
import Carousel from '../components/UI/Carousel';
import StarsRating from '../components/UI/StarsRating';
import Spinner from '../components/UI/Spinner';
import InformationCardSection from '../components/UI/InformationCardSection';

const Hotel = () => {
  const [hotel, setHotel] = useState(null);
  const [hotelLoading, setHotelLoading] = useState(true);

  const { updateReservation } = UseReservation();

  const { id } = useParams(); // get hotel id from url
  const navigate = useNavigate();

  // fetch hotel data on init
  useEffect(() => {
    fetchHotel(id).then(({ data }) => {
      setHotel(data);
      setHotelLoading(false);
    });
  }, []);

  // safeguard against no hotel data
  if (hotelLoading || !hotel) {
    return <Spinner />;
  }

  const onBookHandler = (room) => {
    updateReservation({
      hotelId: id,
      roomId: room._id,
      reachedCheckout: true,
    }).then(() => {
      navigate('/reservation');
    });
  };

  return (
    <PageWrapper>
      <Box sx={{ mb: 3 }}>
        <Carousel images={hotel.images} />
      </Box>

      <Typography sx={{ mb: 3 }} variant='h2' component='h1'>
        {hotel.name}
      </Typography>

      <Typography sx={{ mb: 3 }} variant='h5' component='h5'>
        <Link
          href={`https://www.google.com/maps/@${hotel.location.latitude},${hotel.location.longitude},14z`}
          target='_blank'
        >
          {hotel.address.line1}, {hotel.address.city},{' '}
          {hotel.address.countryName}
        </Link>
      </Typography>

      <StarsRating value={hotel.starRating} />

      <Typography sx={{ mb: 3 }} variant='body1' component='p'>
        {hotel.description.short}
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} lg={4} xl={3}>
          <Card sx={{ backgroundColor: 'secondary.dark' }}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h5'>
                Amenities
              </Typography>

              <List>
                {hotel.amenities.map((amenity) => (
                  <Box key={amenity._id}>
                    <ListItem>{amenity.formatted}</ListItem>
                    <Divider></Divider>
                  </Box>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} lg={8} xl={9}>
          <Card sx={{ backgroundColor: 'secondary.dark' }}>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h5'>
                Useful Information
              </Typography>
              <InformationCardSection
                title={hotel.phoneNumbers > 1 ? 'Phones' : 'Phone'}
                items={hotel.phoneNumbers}
                type='tel'
              />
              <InformationCardSection
                title={hotel.emails > 1 ? 'Emails' : 'Email'}
                items={hotel.emails}
                type='mailto'
              />
              <Typography gutterBottom variant='body1' component='p'>
                Reception
              </Typography>
              <List>
                <Box>
                  <ListItem>
                    Check-in: {hotel.checkIn.from} - {hotel.checkIn.to}
                  </ListItem>
                  <ListItem>Check-out: {hotel.checkOut.to}</ListItem>
                  <Divider></Divider>
                </Box>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography gutterBottom variant='h5' component='h5'>
        Room Types
      </Typography>
      <Grid container spacing={3}>
        {hotel.roomTypes.map((roomType) => (
          <Grid key={roomType._id} item xs={12} sm={6} lg={4}>
            <RoomCard
              room={roomType}
              onBookHandler={() => {
                onBookHandler(roomType);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Hotel;
