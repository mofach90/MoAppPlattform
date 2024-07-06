import { Box, Grid } from '@mui/material';
import Body from '../../Pages/LandingPage/LPcomponents/Body/Body';
import Footer from '../../Pages/LandingPage/LPcomponents/Footer/Footer';
import { versionContext } from '../../contexts/versionprovider';
import { useContext } from 'react';
import Header from '../../Pages/LandingPage/LPcomponents/Header/Header';


const LandingPage = () => {
    const {version} = useContext(versionContext)
    console.log({version})
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
        
          <Header version={version} />
          
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