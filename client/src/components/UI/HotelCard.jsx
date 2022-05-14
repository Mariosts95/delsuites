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
      <CardMedia sx={{ pt: '56.25%' }} image={images[0]?.url} alt='hotel img' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h5'>
          {name}
        </Typography>
        <Typography gutterBottom variant='body2'>
          {address.city}, {address.countryName}
        </Typography>

        <Typography color='text.secondary' sx={{ display: 'flex' }}>
          Rooms: <KingBedIcon fontSize='small' sx={{ mx: 1 }} /> {roomsNumber}
        </Typography>

        <StarsRating value={starRating} />

        <Typography
          variant='body2'
          color='text.secondary'
          className='hide-text'
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained'>
          <Link to={`/hotel/${id}`}>
            <Typography variant='body2' color='text.secondary'>
              View
            </Typography>
          </Link>
        </Button>
        <Button
          variant='outlined'
          href={`https://www.google.com/maps/@${location.latitude},${location.longitude},14z`}
          target='_blank'
          underline='none'
          sx={{ ml: 2 }}
        >
          View on Google Maps
        </Button>
      </CardActions>
    </Card>
  );
};

export default HotelCard;
