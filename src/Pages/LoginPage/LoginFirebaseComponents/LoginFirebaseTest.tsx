import {
  Auth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../../../config/firebaseConfig';
import { useAuth } from '../../../contexts/authProvider';
import LoginFirebaseAnonymous from './LoginFirebaseAnonymous';
import LoginFirebaseEmailPass from './LoginFirebaseEmailPass';
import LoginFirebaseGoogleAuth from './LoginFirebaseGoogleAuth';
import { useEffect } from 'react';

export type valueType = {
  emailAdress: string;
  password: string;
  actionType?: string;
};
const firebaseSignInAnonymously = (auth: Auth) => {
  return signInAnonymously(auth);
};
const firebaseSignInWithEmailAndPassword = (values: valueType) => {
  const emailAdress: string = values.emailAdress;
  const password: string = values.password;

  console.log('values: ', values);

  return signInWithEmailAndPassword(auth, emailAdress, password);
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
  return signInWithPopup(auth, provider);
};

const handleOnClickTest = async (
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
  const { setAuthenticationForm } = useAuth();

  let handleOnClick: (values?: valueType) => Promise<void> = async (
    values?: valueType,
  ) => {
    if (method === 'google') {
      await handleOnClickTest(
        () => firebaseSignInWithSocialAccount(auth, 'google'),
        setAuthenticationForm,
      );
    } else if (method === 'facebook') {
      await handleOnClickTest(
        () => firebaseSignInWithSocialAccount(auth, 'facebook'),
        setAuthenticationForm,
      );
    } else if (method === 'anonymous') {
      await handleOnClickTest(
        () => firebaseSignInAnonymously(auth),
        setAuthenticationForm,
      );
    } else if (method === 'email_password' && values) {
      await handleOnClickTest(
        () => firebaseSignInWithEmailAndPassword(values),
        setAuthenticationForm,
      );
    }
  };

  const handleFormSubmit = async (values: valueType) => {
    setAuthenticationForm(
      'Firebase based authentication using Email and Password or Anonymously',
    );
    if (values.actionType === 'signIn') {
      await handleOnClick(values);
    } else if (values.actionType === 'signUp') {
      await handleOnSignUp(values);
    }
  };
  const handleOnSignUp = async (values: valueType) => {
    try {
      const emailAdress: string = values.emailAdress;
      const password: string = values.password;

      console.log('values: ', values);
      const createNewuser = await createUserWithEmailAndPassword(
        auth,
        emailAdress,
        password,
      );
      console.log('createNewuser: ', createNewuser);
    } catch (error) {
      console.log({ error });
    }
  };
  

  return (
    <>
      {(method === 'google' || method === 'facebook') && (
        <LoginFirebaseGoogleAuth
          handleOnClick={handleOnClick}
          method={method}
        />
      )}
      {method === 'anonymous' && (
        <LoginFirebaseAnonymous handleOnClick={handleOnClick} />
      )}
      {method === 'email_password' && (
        <LoginFirebaseEmailPass onSubmit={handleFormSubmit} />
      )}
    </>
  );
}

export default LoginFirebase;
