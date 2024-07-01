import { createUserWithEmailAndPassword } from 'firebase/auth';
import { valueType } from '../LoginFirebaseEmailPass';
import { auth } from '../../../../config/firebaseConfig';

export const handleOnSignUp = async (values: valueType) => {
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
