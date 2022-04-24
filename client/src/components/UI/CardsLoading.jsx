// @Material UI
import Grid from '@mui/material/Grid';
import CardSkeleton from './CardSkeleton';

// how many cards to show
const cardsLoading = [...Array(10)];

const CardsLoading = () => {
  return (
    <Grid container spacing={3}>
      {cardsLoading.map((_, index) => (
        <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
          <CardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsLoading;