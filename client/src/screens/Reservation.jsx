import { useState, useEffect } from 'react';
import { format, differenceInDays } from 'date-fns';

// Context
import { UseReservation } from '../store/ReservationProvider';

// Services
import { fetchHotel } from '../services/hotels';

// @Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import GroupIcon from '@mui/icons-material/Group';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Components
import HotelCard from '../components/UI/HotelCard';
import PageWrapper from '../components/UI/PageWrapper';
import CardsLoading from '../components/UI/CardsLoading';
import InformationCardSection from '../components/UI/InformationCardSection';

// Helpers
// get random price based on rating
const getRandomPrice = (min = 15, max = 30, hotelStars) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const price = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  return price * hotelStars;
};

const Reservation = () => {
  const [hotel, setHotel] = useState(null);
  const [hotelLoading, setHotelLoading] = useState(true);

  const [room, setRoom] = useState(null);
  const [roomPrice, setRoomPrice] = useState(); // temporary fix of no price data

  const { reservation } = UseReservation();

  useEffect(() => {
    fetchHotel(reservation.hotelId)
      .then(({ data }) => {
        setHotel(data);
        return data;
      })
      .then((hotelData) => {
        setRoom(
          hotelData.roomTypes.find((room) => room._id === reservation.roomId)
        );
        setRoomPrice(getRandomPrice(15, 30, +hotelData?.starRating));
        setHotelLoading(false);
      });
  }, []);

  // safeguard against no hotel data
  if (hotelLoading) {
    return (
      <PageWrapper>
        <CardsLoading />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Grid container alignItems='center' justifyContent='space-between'>
        <Typography variant='h2' component='h1' gutterBottom>
          Reservation Overview
        </Typography>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
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

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ backgroundColor: 'secondary.dark' }}>
            <CardMedia
              sx={{ pt: '56.25%' }}
              image={room.images[0]?.url}
              alt='hotel img'
            />
            <CardContent>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography gutterBottom variant='h5' component='h5'>
                    {room.name} - {room.maxOccupancy}{' '}
                    <GroupIcon fontSize='small' />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography gutterBottom variant='body2'>
                    {room.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography gutterBottom variant='h5' component='h5'>
                    Amenities
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    {room.amenities.map((amenity) => (
                      <Chip
                        key={amenity._id}
                        color='primary'
                        sx={{ mr: 1, mb: 1, color: 'primary.contrastText' }}
                        variant='outlined'
                        label={amenity.formatted}
                        onClick={() => {}}
                      />
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={12} lg={4}>
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
                    Check-in: {format(reservation.checkIn, 'd LLL yyyy')} -
                    Hours: {hotel.checkIn.from} - {hotel.checkIn.to}
                  </ListItem>
                  <ListItem>
                    Check-out: {format(reservation.checkOut, 'd LLL yyyy')} -
                    Hours: {hotel.checkOut.to}
                  </ListItem>
                  <Divider></Divider>
                </Box>
              </List>
              <Typography gutterBottom variant='body1' component='p'>
                Price
              </Typography>
              <List>
                <Box>
                  <ListItem>
                    {reservation.nights} X {roomPrice}€ ={' '}
                    {reservation.nights * roomPrice}€
                  </ListItem>
                  <Divider></Divider>
                  <Button
                    variant='contained'
                    size='large'
                    fullWidth
                    sx={{
                      display: 'block',
                      p: 2,
                      mt: 2,
                      mx: 'auto',
                    }}
                  >
                    Checkout
                  </Button>
                </Box>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Reservation;
