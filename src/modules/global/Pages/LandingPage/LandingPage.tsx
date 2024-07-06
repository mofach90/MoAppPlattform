import { Box, Grid } from '@mui/material';
import { useContext } from 'react';
import Footer from '../../../../Pages/LandingPage/LPcomponents/Footer/Footer';
import { versionContext } from '../../../../contexts/versionprovider';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

const LandingPage = () => {
  const { version } = useContext(versionContext);
  console.log({ version });
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
