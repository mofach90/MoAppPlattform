import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../config/firebaseConfig';
import { valueType } from './types';

export const firebaseSignInWithEmailAndPassword = (values: valueType) => {
  const emailAdress: string = values.emailAdress;
  const password: string = values.password;

  console.log('values: ', values);

  return signInWithEmailAndPassword(auth, emailAdress, password);
};
