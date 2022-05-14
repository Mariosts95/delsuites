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
import Carousel from '../components/UI/Carousel';
import PageWrapper from '../components/UI/PageWrapper';
import StarsRating from '../components/UI/StarsRating';

const Hotel = () => {
  const [hotel, setHotel] = useState(null);
  const [hotelLoading, setHotelLoading] = useState(true);
  const [hotelError, setHotelError] = useState(null);
  const [selectedDays, setSelectedDays] = useState();

  const { reservation, updateReservation } = UseReservation();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchHotel(id)
      .then(({ data }) => {
        setHotel(data);
        setHotelLoading(false);
      })
      .catch((err) => {
        setHotelError(err);
        setHotelLoading(false);
      });
  }, []);

  if (hotelLoading || !hotel) {
    return <div>Loading...</div>;
  }

  const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <>
      <PageWrapper>
        <Box sx={{ mb: 3 }}>
          <Carousel images={hotel.images} />
        </Box>
        <Typography sx={{ mb: 3 }} variant='h1' component='h1'>
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

        <Typography gutterBottom variant='h5' component='h5'>
          Room Types
        </Typography>
        <Grid container spacing={3}>
          {hotel.roomTypes.map((roomType) => (
            <Grid key={roomType._id} item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: 'secondary.dark' }}>
                <CardMedia
                  sx={{ pt: '56.25%' }}
                  image={roomType.images[0]?.url}
                  alt='hotel img'
                />
                <CardContent>
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography gutterBottom variant='h5' component='h5'>
                        {roomType.name} - {roomType.maxOccupancy}{' '}
                        <GroupIcon fontSize='small' />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography gutterBottom variant='body2'>
                        {roomType.description}
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
                        {roomType.amenities.map((amenity) => (
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
                <CardActions>
                  <Grid
                    container
                    alignContent={'center'}
                    justifyContent={'space-between'}
                  >
                    <Grid item>
                      <Autocomplete
                        disablePortal
                        id='staying-days'
                        options={days}
                        sx={{ width: 300 }}
                        onChange={(e, value) => {
                          setSelectedDays(value);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} label='Days' />
                        )}
                      />
                    </Grid>
                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        variant='contained'
                        size='large'
                        onClick={() => {
                          if (selectedDays) {
                            updateReservation({
                              checkIn: hotel.checkIn.from,
                              checkOut: hotel.checkOut.to,
                              hotelId: id,
                              roomId: roomType._id,
                              days: selectedDays,
                            });
                            navigate(`/reservation`);
                          }
                        }}
                      >
                        Book
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PageWrapper>
    </>
  );
};

export default Hotel;
