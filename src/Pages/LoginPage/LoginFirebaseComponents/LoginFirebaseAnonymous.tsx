import { Box, Button, Grid, Typography } from '@mui/material';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../../config/firebaseConfig';
import { useAuth } from '../../../contexts/authProvider';

function LoginFirebaseAnonymous() {
  // connectAuthEmulator(auth, 'http://127.0.0.1:8500'); // TODO Delete only for DEV

  const { setAuthenticationForm } = useAuth();
  const handleOnClick = async () => {
    console.log('iam in');
    setAuthenticationForm(
      'Firebase based authentication using Email and Password',
    );
    try {
      const userCredential = await signInAnonymously(auth);
      console.log('userCredential: ', userCredential);
      // if (userCredential.user) {
      //   const idToken = await userCredential.user.getIdToken();
      //   console.log('idToken: ', idToken);
      //   const response: Response = await fetch(
      //     '/api/v1/auth/login-firebase-email-password',
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({ idToken }),
      //     },
      //   );
      //   if (response.ok) {
      //     window.open('/dashboard', '_self');
      //   } else {
      //     console.error('failed to Validate idToken from Backend');
      //   }
      // }
    } catch (error) {
      console.log({ error });
    }
  };
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
            <Typography
              variant="h6"
              fontFamily={'monospace'}
              fontStyle={'oblique'}
              mr={8}
            >
              Anonymous - Firebase Method
            </Typography>
            <img
              src="assets/incognito-svgrepo-com.svg"
              alt="Logo"
              style={{ width: 50, height: 50 }}
            />
          </Grid>

          <Grid item xs={12} marginBottom={2}>
            <Button
              onClick={handleOnClick}
            >
              Anonymous Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}

export default LoginFirebaseAnonymous;
