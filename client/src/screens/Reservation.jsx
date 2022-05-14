import { useState, useEffect } from 'react';

// Context
import { UseReservation } from '../store/ReservationProvider';

// Services
import { fetchHotel } from '../services/hotels';

// @Material UI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import GroupIcon from '@mui/icons-material/Group';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Components
import HotelCard from '../components/UI/HotelCard';
import PageWrapper from '../components/UI/PageWrapper';
import CardsLoading from '../components/UI/CardsLoading';
import StarsRating from '../components/UI/StarsRating';

const Reservation = () => {
  const [hotel, setHotel] = useState(null);
  const [room, setRoom] = useState(null);
  const [hotelLoading, setHotelLoading] = useState(true);

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
        setHotelLoading(false);
      });
  }, []);

  // loading state
  if (hotelLoading) {
    return (
      <PageWrapper>
        <CardsLoading />
      </PageWrapper>
    );
  }

  console.log(room);

  return (
    <PageWrapper>
      <Grid container alignItems='center' justifyContent='space-around'>
        <Typography variant='h1' gutterBottom>
          Reservation Overview
        </Typography>
        <Button
          variant='contained'
          size='large'
          fullWidth
          sx={{ display: 'block', maxWidth: 300, p: 2 }}
        >
          Checkout
        </Button>
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
              <Typography gutterBottom variant='body2' component='p'>
                {hotel.phoneNumbers > 1 ? 'Phones' : 'Phone'}
              </Typography>
              <List>
                {hotel.phoneNumbers.map((phoneNumber) => (
                  <Box key={phoneNumber}>
                    <ListItem>
                      <Link
                        href={`tel:+${phoneNumber}`}
                        sx={{ color: 'primary.contrastText' }}
                      >
                        {phoneNumber}
                      </Link>
                    </ListItem>
                    <Divider></Divider>
                  </Box>
                ))}
              </List>
              <Typography gutterBottom variant='body2' component='p'>
                {hotel.emails > 1 ? 'Emails' : 'Email'}
              </Typography>
              <List>
                {hotel.emails.map((email) => (
                  <Box key={email}>
                    <ListItem>
                      <Link
                        href={`mailto:${email}`}
                        sx={{ color: 'primary.contrastText' }}
                      >
                        {email}
                      </Link>
                    </ListItem>
                    <Divider></Divider>
                  </Box>
                ))}
              </List>
              <Typography gutterBottom variant='body2' component='p'>
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
    </PageWrapper>
  );
};

export default Reservation;
