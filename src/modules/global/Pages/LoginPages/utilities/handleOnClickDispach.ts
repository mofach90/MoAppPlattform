import { auth } from '../../../../../config/firebaseConfig';
import { valueType } from '../firebase-login/components/email-and-password-method/LoginFirebaseEmailPass';
import { firebaseSignInAnonymously } from './firebaseSignInAnoumously';
import { firebaseSignInWithEmailAndPassword } from './firebaseSignInWithEmailAndPassword';
import { firebaseSignInWithSocialAccount } from './firebaseSignInWithSocialAccount';
import { handleOnClick } from './handleOnClick';

export const handleOnClickDispach: (
  method?: string,
  values?: valueType,
) => Promise<void> = async (method, values) => {
  console.log('Hello from Dispatch ', method);
  if (method === 'google') {
    await handleOnClick(() => firebaseSignInWithSocialAccount(auth, 'google'));
  } else if (method === 'facebook') {
    await handleOnClick(() =>
      firebaseSignInWithSocialAccount(auth, 'facebook'),
    );
  } else if (method === 'anonymous') {
    await handleOnClick(() => firebaseSignInAnonymously(auth));
  } else if (method === 'email_password' && values) {
    await handleOnClick(() => firebaseSignInWithEmailAndPassword(values));
  }
};
