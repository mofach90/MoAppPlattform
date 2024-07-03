import { useAuth } from '../../../contexts/authProvider';
import LoginFirebaseAnonymous from './LoginFirebaseAnonymous';
import LoginFirebaseEmailPass from './LoginFirebaseEmailPass';
import LoginFirebaseSocialAccount from './LoginFirebaseSocialAccount';
import { handleFormSubmit } from './utilities/handleFormSubmit';
import { handleOnClickDispach } from './utilities/handleOnClickDispach';

function LoginFirebase({ method }: { method: string }) {
  const { setAuthenticationForm } = useAuth();
  return (
    <>
      {(method === 'google' || method === 'facebook') && (
        <LoginFirebaseSocialAccount
          handleOnClick={() =>
            handleOnClickDispach(setAuthenticationForm, method)
          }
          method={method}
        />
      )}
      {method === 'anonymous' && (
        <LoginFirebaseAnonymous
          handleOnClick={() =>
            handleOnClickDispach(setAuthenticationForm, method)
          }
        />
      )}
      {method === 'email_password' && (
        <LoginFirebaseEmailPass
          onSubmit={() => {
            handleFormSubmit(setAuthenticationForm, method);
          }}
        />
      )}
    </>
  );
}

export default LoginFirebase;
