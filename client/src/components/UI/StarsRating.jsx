import { useState } from 'react';
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
const StarsRating = () => {
  const [value, setValue] = useState(4.5);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: 1,
        mb: 1,
      }}
    >
      <Rating
        readOnly
        name='hover-feedback'
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default StarsRating;
