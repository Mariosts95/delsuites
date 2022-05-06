import { Link } from 'react-router-dom';

// @Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as MuiLink } from '@mui/material';

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
          <Link to={`/hotel/${id}`} style={{ color: '#fff' }}>
            View
          </Link>
        </Button>
        <Button size='small' variant='outlined'>
          <MuiLink
            href={`https://www.google.com/maps/@${location.latitude},${location.longitude},14z`}
            underline='none'
            target='_blank'
          >
            View on Google Maps
          </MuiLink>
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewCard;
