import { valueType } from '../firebase-login/components/email-and-password-method/LoginFirebaseEmailPass';
import { handleOnClickDispach } from './handleOnClickDispach';
import { handleOnSignUp } from './handleOnSignUp';

export const handleFormSubmit = async (
  method?: string,

  values?: valueType,
) => {
  if (values?.actionType === 'signIn') {
    await handleOnClickDispach(method, values);
  } else if (values?.actionType === 'signUp') {
    await handleOnSignUp(values);
  }
};
