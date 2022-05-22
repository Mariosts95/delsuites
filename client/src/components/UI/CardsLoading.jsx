// @Material UI
import Grid from '@mui/material/Grid';
import CardSkeleton from './CardSkeleton';

const cardsLoading = [...Array(10)]; // how many cards to show

const CardsLoading = () => {
  return (
    <Grid container spacing={3}>
      {cardsLoading.map((_, index) => (
        <Grid key={index} item xs={12} md={6} xl={4}>
          <CardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsLoading;
