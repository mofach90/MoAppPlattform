import { UserCredential } from 'firebase/auth';

export const handleOnClick = async (
  signInMethod: () => Promise<UserCredential>,
  setAuthenticationForm: (value: string) => void,
) => {
  console.log('iam in');
  setAuthenticationForm(
    'Firebase based authentication using Email and Password or Anonymously',
  );
  try {
    const userCredential = await signInMethod();
    if (userCredential.user) {
      const idToken = await userCredential.user.getIdToken();
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
        window.open('/realdashboard', '_self');
      } else {
        console.error('failed to Validate idToken from Backend');
      }
    }
  } catch (error) {
    console.log({ error });
  }
};
