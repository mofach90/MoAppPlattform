import { auth } from '../../../../config/firebaseConfig';
import { valueType } from '../LoginFirebaseEmailPass';
import { firebaseSignInAnonymously } from './firebaseSignInAnoumously';
import { firebaseSignInWithEmailAndPassword } from './firebaseSignInWithEmailAndPassword';
import { firebaseSignInWithSocialAccount } from './firebaseSignInWithSocialAccount';
import { handleOnClick } from './handleOnClick';

export const handleOnClickDispach: (
  values?: valueType,
  method?: string,
) => Promise<void> = async (values?: valueType, method?: string) => {
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
