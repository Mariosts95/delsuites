// @Material UI
import Grid from '@mui/material/Grid';
import Card from '../components/UI/Card';

const dummy = [...Array(9)];

const Home = () => {
  return (
    <Grid container spacing={3} sx={{ pl: 3, pr: 3 }}>
      {dummy.map((card, index) => (
        <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
          <Card />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
