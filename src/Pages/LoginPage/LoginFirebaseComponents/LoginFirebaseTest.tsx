import { Box, Button, Grid, Typography } from '@mui/material';
import {
  Auth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../config/firebaseConfig';
import { useAuth } from '../../../contexts/authProvider';
import LoginFirebaseGoogleAuth from './LoginFirebaseGoogleAuth';
import LoginFirebaseAnonymous from './LoginFirebaseAnonymous';

const firebaseSignInAnonymously = (auth: Auth) => {
  return signInAnonymously(auth);
};

const firebaseSignInWithSocialAccount = async (
  auth: Auth,
  providerType?: string,
) => {
  let provider: FacebookAuthProvider | GoogleAuthProvider;
  if (providerType === 'google') {
    provider = new GoogleAuthProvider();
  } else {
    provider = new FacebookAuthProvider();
  }
  console.log('iam in');
  return signInWithPopup(auth, provider);
};

const handleOnClicktest = async (signInMethode: any) => {
  const { setAuthenticationForm } = useAuth();

  console.log('iam in');
  setAuthenticationForm(
    'Firebase based authentication using Email and Password or Anonymously',
  );
  try {
    const userCredential = await signInMethode();

    console.log('userCredential: ', userCredential);
    if (userCredential.user) {
      const idToken = await userCredential.user.getIdToken();
      console.log('idToken: ', idToken);
      const response: Response = await fetch(
        '/api/v1/auth/login-firebase-email-password-or-anonymously',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ idToken }),
        },
      );
      if (response.ok) {
        window.open('/dashboard', '_self');
      } else {
        console.error('failed to Validate idToken from Backend');
      }
    }
  } catch (error) {
    console.log({ error });
  }
};

// Main component
function LoginFirebase({ method }: { method: string }) {
  // connectAuthEmulator(auth, 'http://127.0.0.1:8500'); // TODO Delete only for DEV
  let handleOnClick: () => Promise<void> = async () => {};
  if (method === 'google') {
    handleOnClick = () =>
      handleOnClicktest(() => firebaseSignInWithSocialAccount(auth, 'google'));
  } else if (method === 'facebook') {
    handleOnClick = () =>
      handleOnClicktest(() =>
        firebaseSignInWithSocialAccount(auth, 'facebook'),
      );
  } else if (method === 'anonymous') {
    handleOnClick = () =>
      handleOnClicktest(() => firebaseSignInAnonymously(auth));
  }

  return (
    <>
      {(method === "google" || method === "facebook") && <LoginFirebaseGoogleAuth />}
      {method === "anonymous" && <LoginFirebaseAnonymous />}
    </>
  );
  }
  
  export default LoginFirebase;
  
  // <Grid
  //   container
  //   display={'flex'}
  //   alignItems={'center'}
  //   justifyContent={'center'}
  //   marginBottom={4}
  // >
  //   <Box style={{ width: '80%' }}>
  //     <Grid container border={'1px solid'} borderRadius={4} padding={4}>
  //       <Grid
  //         item
  //         xs={12}
  //         marginBottom={4}
  //         display={'flex'}
  //         alignItems={'center'}
  //       >
  //         <Typography
  //           variant="h6"
  //           fontFamily={'monospace'}
  //           fontStyle={'oblique'}
  //           mr={8}
  //         >
  //           {method.charAt(0).toUpperCase() + method.slice(1)} - Firebase
  //           Method
  //         </Typography>
  //         <img
  //           src="assets/incognito-svgrepo-com.svg"
  //           alt="Logo"
  //           style={{ width: 50, height: 50 }}
  //         />
  //       </Grid>

  //       <Grid item xs={12} marginBottom={2}>
  //         <Button
  //           variant="contained"
  //           color="primary"
  //           fullWidth
  //           onClick={handleOnClick}
  //         >
  //           {method.charAt(0).toUpperCase() + method.slice(1)} Sign In
  //         </Button>
  //       </Grid>
  //     </Grid>
  //   </Box>
  // </Grid>