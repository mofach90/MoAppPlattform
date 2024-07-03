import { valueType } from '../LoginFirebaseEmailPass';
import { handleOnClickDispach } from './handleOnClickDispach';
import { handleOnSignUp } from './handleOnSignUp';

export const handleFormSubmit = async (
  setAuthenticationForm: (value: string) => void,
  method?: string,

  values?: valueType,
) => {
  if (values?.actionType === 'signIn') {
    await handleOnClickDispach(setAuthenticationForm, method, values);
  } else if (values?.actionType === 'signUp') {
    await handleOnSignUp(values);
  }
};
