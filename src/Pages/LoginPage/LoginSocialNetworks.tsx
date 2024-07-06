import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, InputAdornment, Paper, Typography } from '@mui/material';
import { useAuth } from '../../contexts/authProvider';
import { DashboardButton } from './LPComponents/goDashboardButton';
import { HomeButton } from './LPComponents/goHomeButton';

function LoginSocialNetworksPage() {
  const { setAuthenticationForm } = useAuth();

  const handleSocialNetworkAuthentication = (provider: string) => {
    window.open(`/api/v1/auth/login-social-auth/${provider}`, '_self');
    setAuthenticationForm('social based authentication');
  };
  return (
    <Grid container height="100vh">
      <Grid container alignItems={'center'} justifyContent={'end'} p={2}>
        <Grid item>
          <DashboardButton version="demo" />
          <HomeButton />
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="90%"
      >
        <Grid item xs={10} md={7} lg={5}>
          <Paper
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            variant="outlined"
          >
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} textAlign={'center'}>
                <Typography variant="h5">
                  Choose Your Social Network Account to Login In
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={() => handleSocialNetworkAuthentication('google')}
                  color="success"
                  fullWidth
                  variant="contained"
                  sx={{ marginBottom: 2 }}
                >
                  <InputAdornment position="start">
                    <GoogleIcon fontSize="large" sx={{ color: 'white' }} />
                  </InputAdornment>
                  <Typography width={'90%'}>Log In With Google</Typography>
                </Button>
                <Button
                  onClick={() => handleSocialNetworkAuthentication('facebook')}
                  color="primary"
                  fullWidth
                  variant="contained"
                  sx={{ marginBottom: 2 }}
                >
                  <InputAdornment position="start">
                    <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
                  </InputAdornment>
                  <Typography width={'90%'}>Log In With facebook</Typography>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginSocialNetworksPage;
