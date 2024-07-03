import { Button, Grid, Typography } from '@mui/material';
import { LogoutHandler } from '../../utilities/logoutHandler';
import { useNavigate } from 'react-router-dom';
import { HomeButton } from '../LoginPage/LPComponents/goHomeButton';

function DemoDashboard() {
  const navigate = useNavigate();
  return (
    <Grid container height="100vh">
      <Grid container alignItems={'center'} justifyContent={'end'} p={2}>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              LogoutHandler(navigate);
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
          <Typography variant="h3">Welcome to Your  ** DEMO ** Dashboard</Typography>
          <Typography fontFamily={'fantasy'} variant="h2" color={'red'}>
            Habibi
          </Typography>{' '}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DemoDashboard;
