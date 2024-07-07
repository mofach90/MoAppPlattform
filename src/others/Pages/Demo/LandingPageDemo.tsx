import { Box, Grid } from '@mui/material';
import Footer from '../../../modules/global/Pages/LandingPage/components/Footer/Footer';
import Body from '../LandingPage/LPcomponents/Body/Body';
import HeaderDemo from './HeaderDemo';

const LandingPageDemo = () => {
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
          <HeaderDemo />
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

export default LandingPageDemo;
