// @Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// Components
import StarsRating from './StarsRating';

const NewCard = ({
  id,
  name,
  description,
  starRating,
  address,
  images,
  location,
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
        <Button size='small' variant='contained'>
          Learn More
        </Button>
        <Button size='small' variant='outlined'>
          <Link
            href={`https://www.google.com/maps/@${location.latitude},${location.longitude},14z`}
            underline='none'
            target='_blank'
          >
            View on Google Maps
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewCard;
