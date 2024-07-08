import { Button, Grid, Typography } from '@mui/material';
import { HomeButton } from '../../../modules/global/components/goHomeButton';
import { LogoutHandler } from '../../utilities/logoutHandler';


function DemoDashboard() {
  return (
    <Grid container height="100vh">
      <Grid container alignItems={'center'} justifyContent={'end'} p={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              LogoutHandler();
            }}
          >
            LOGOUT
          </Button>
          <HomeButton />
        </Grid>
      </Grid>
      <Grid
        container
        height={'90%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item xs={6} textAlign={'center'}>
          <Typography variant="h3">
            Welcome to Your ** DEMO ** Dashboard
          </Typography>
          <Typography fontFamily={'fantasy'} variant="h2" color={'red'}>
            Habibi
          </Typography>{' '}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DemoDashboard;
