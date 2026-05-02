import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Button, Grid, InputAdornment, Paper, Typography } from '@mui/material';
import { useAuth } from '../../../../../contexts/authProvider';
import { HomeButton } from '../../../components/goHomeButton';

function LoginSocialNetworksPage() {
  const { accessDenied } = useAuth();

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
            {accessDenied ? (
              <Grid
                container
                spacing={3}
                justifyContent="center"
                textAlign="center"
              >
                <Grid item xs={12}>
                  <LockOutlinedIcon
                    sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Access Restricted
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    This site is still under testing. Not all users are allowed
                    to login at this time.
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={2}>
                    Please check back later.
                  </Typography>
                </Grid>
              </Grid>
            ) : (
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
            )}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LoginSocialNetworksPage;
