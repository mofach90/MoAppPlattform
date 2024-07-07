import { Box, Button, Grid, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function LoginFirebaseGoogleAuth({
  handleOnClick,
  method,
}: {
  handleOnClick: () => void;
  method: string;
}) {
  return (
    <Grid
      container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      marginBottom={4}
    >
      <Box style={{ width: '80%' }}>
        <Grid container border={'1px solid'} borderRadius={4} padding={4}>
          <Grid
            item
            xs={12}
            marginBottom={4}
            display={'flex'}
            alignItems={'center'}
          >
            {method === 'google' && <GoogleIcon fontSize="large" />}
            {method === 'facebook' && <FacebookIcon fontSize="large" />}
            <Typography
              variant="h6"
              fontFamily={'monospace'}
              fontStyle={'oblique'}
              ml={8}
            >
              {method} Authentication - Firebase Method
            </Typography>
          </Grid>

          <Grid item xs={12} marginBottom={2}>
            {method === 'google' && (
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={handleOnClick}
                sx={{
                  marginBottom: 3,
                }}
              >
                Login With Your Google Account
              </Button>
            )}
            {method === 'facebook' && (
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                onClick={handleOnClick}
                sx={{
                  marginBottom: 3,
                }}
              >
                Login With Your Facebook Account
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default LoginFirebaseGoogleAuth;
