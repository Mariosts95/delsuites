// @Material UI
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Very Bad',
  1: 'Bad',
  1.5: 'Very Poor',
  2: 'Poor',
  2.5: 'Ok',
  3: 'Fair',
  3.5: 'Fair+',
  4: 'Good',
  4.5: 'Very Good',
  5: 'Excellent',
};

const StarsRating = ({ value }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        my: 1,
      }}
    >
      <Rating
        readOnly
        value={value}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.45 }} fontSize='inherit' />}
      />
      {value !== null && <Box sx={{ ml: 1 }}>{labels[value]}</Box>}
    </Box>
  );
};

export default StarsRating;
