import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Context
import { UseReservation } from '../../store/ReservationProvider';

// @Material UI
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import GroupIcon from '@mui/icons-material/Group';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RoomCard = ({ room, onBookHandler }) => {
  return (
    <Card sx={{ backgroundColor: 'secondary.dark' }}>
      <CardMedia
        sx={{ pt: '56.25%' }}
        image={room.images[0]?.url}
        alt={room.name}
      />
      <CardContent>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography gutterBottom variant='h5' component='h5'>
              {room.name} - {room.maxOccupancy} <GroupIcon fontSize='small' />
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
      <CardActions sx={{ px: 2 }}>
        <Grid container alignContent={'center'} justifyContent={'center'}>
          <Button
            variant='contained'
            fullWidth
            sx={{ p: 1 }}
            onClick={onBookHandler}
          >
            Book
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default RoomCard;
