import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, InputAdornment, Paper, Typography } from '@mui/material';
import { HomeButton } from '../../../components/goHomeButton';

function LoginSocialNetworksPage() {
  const handleGoogleLogin = () => {
    window.open('/api/v1/auth/login-social-auth/google', '_self');
  };

  return (
    <Grid container height="100vh">
      <Grid container alignItems={'center'} justifyContent={'end'} p={2}>
        <Grid item>
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
                <Typography variant="h5">Sign in to your account</Typography>
              </Grid>
              <Grid item xs={8}>
                <Button
                  onClick={handleGoogleLogin}
                  color="success"
                  fullWidth
                  variant="contained"
                >
                  <InputAdornment position="start">
                    <GoogleIcon fontSize="large" sx={{ color: 'white' }} />
                  </InputAdornment>
                  <Typography width={'90%'}>Continue with Google</Typography>
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
