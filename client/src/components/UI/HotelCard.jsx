import { Link } from 'react-router-dom';

// @Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import KingBedIcon from '@mui/icons-material/KingBed';

// Components
import StarsRating from './StarsRating';

const HotelCard = ({
  id,
  name,
  description,
  starRating,
  address,
  images,
  location,
  roomsNumber,
}) => {
  return (
    <Card sx={{ backgroundColor: 'secondary.dark' }}>
      <CardMedia sx={{ pt: '56.25%' }} image={images[0]?.url} alt={name} />

      <CardContent>
        <Typography gutterBottom variant='h5' component='h5'>
          {name}
        </Typography>

        <Typography gutterBottom variant='body2'>
          {address.city}, {address.countryName}
        </Typography>

        <StarsRating value={starRating} />

        <Typography
          gutterBottom
          color='text.secondary'
          sx={{ display: 'flex' }}
        >
          Rooms: <KingBedIcon fontSize='medium' sx={{ mx: 1 }} /> {roomsNumber}
        </Typography>

        <Typography
          variant='body2'
          color='text.secondary'
          className='hide-text'
        >
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2 }}>
        <Link to={`/hotel/${id}`}>
          <Button variant='contained'>
            <Typography variant='body1' color='text.secondary'>
              View
            </Typography>
          </Button>
        </Link>
        <Button
          variant='outlined'
          href={`https://www.google.com/maps/@${location.latitude},${location.longitude},14z`}
          target='_blank'
          underline='none'
          sx={{ ml: 2 }}
        >
          <Typography variant='body1' color='primary'>
            View on Google Maps
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default HotelCard;
