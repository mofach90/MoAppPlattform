import { Box, Button, Grid, Typography } from '@mui/material';

function LoginFirebaseGoogleAuth({
  handleOnClick,
  method,
}: {
  handleOnClick: () => Promise<void>;
  method: string;
}) {
  // connectAuthEmulator(auth, 'http://127.0.0.1:8500'); // TODO Delete only for DEV

  // const { setAuthenticationForm } = useAuth();
  // const handleOnClick  = async (providerType: string) => {
  //   let provider : FacebookAuthProvider | GoogleAuthProvider
  //   if (providerType === 'google') {
  //     provider = new GoogleAuthProvider();

  //     }else {
  //     provider = new FacebookAuthProvider();

  //   }
  //   console.log('iam in');
  //   setAuthenticationForm(
  //     'Firebase based authentication using Email and Password or Anonymously',
  //   );
  //   try {
  //     const userCredential = await signInWithPopup(auth, provider);
  //     console.log('userCredential: ', userCredential);
  //     if (userCredential.user) {
  //       const idToken = await userCredential.user.getIdToken();
  //       console.log('idToken: ', idToken);
  //       const response: Response = await fetch(
  //         '/api/v1/auth/login-firebase-email-password-or-anonymously',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ idToken }),
  //         },
  //       );
  //       if (response.ok) {
  //         window.open('/dashboard', '_self');
  //       } else {
  //         console.error('failed to Validate idToken from Backend');
  //       }
  //     }
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
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
              {method} Authentication - Firebase Method
            </Typography>
            <img
              src="assets/incognito-svgrepo-com.svg"
              alt="Logo"
              style={{ width: 50, height: 50 }}
            />
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
