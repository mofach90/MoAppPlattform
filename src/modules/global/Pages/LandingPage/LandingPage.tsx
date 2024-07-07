import { Box, Grid } from '@mui/material';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const LandingPage = () => {
  return (
    <Box
      minHeight={'100hv'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      sx={{ overflow: 'hidden' }}
    >
      <Grid
        container
        minWidth={700}
        display={'flex'}
        flexDirection={'column'}
        maxWidth={1200}
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Body />
        </Grid>
        <Grid item mt={'auto'}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
