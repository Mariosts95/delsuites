import { Link } from 'react-router-dom';

// @Material UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Components
import PageWrapper from '../components/UI/PageWrapper';

const NotFound = () => {
  return (
    <PageWrapper>
      <Grid container justifyContent={'center'} spacing={3} sx={{ py: 8 }}>
        <Grid item xs={12}>
          <Typography variant='h3' align='center' gutterBottom>
            404 | This page could not be found.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Link
            to={'/'}
            style={{
              display: 'block',
              maxWidth: 'fit-content',
              margin: '0 auto',
            }}
          >
            <Button variant='contained' sx={{ p: 2, my: 5 }}>
              <Typography variant='body1' color='text.secondary'>
                Go back to the homepage
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default NotFound;
