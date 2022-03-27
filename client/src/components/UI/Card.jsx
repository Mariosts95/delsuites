// @Material UI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import StarsRating from './StarsRating';

const NewCard = () => {
  return (
    <Card sx={{ backgroundColor: 'secondary.dark' }}>
      <CardMedia
        sx={{ pt: '56.25%' }}
        image='https://source.unsplash.com/random'
        alt='hotel img'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h5'>
          Hotel Name
        </Typography>
        <Typography gutterBottom variant='body2'>
          City, Country
        </Typography>

        <StarsRating />

        <Typography variant='body2' color='text.secondary'>
          Hotel description hotel description hotel description hotel
          description hotel description hotel description hotel description
          hotel description hotel description hotel description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained'>
          Learn More
        </Button>
        <Button size='small' variant='outlined'>
          View on Google Maps
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewCard;
