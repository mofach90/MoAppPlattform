import { useAuth } from '../../../../../../contexts/authProvider';
import { handleFormSubmit } from '../../utilities/handleFormSubmit';
import { handleOnClickDispach } from '../../utilities/handleOnClickDispach';
import LoginFirebaseAnonymous from './anonymous-method/LoginFirebaseAnonymous';
import LoginFirebaseEmailPass from './email-and-password-method/LoginFirebaseEmailPass';
import LoginFirebaseSocialAccount from './social-account-method/LoginFirebaseSocialAccount';

function LoginFirebaseMethods({ method }: { method: string }) {
  const { setAuthenticationForm } = useAuth();

  return (
    <>
      {(method === 'google' || method === 'facebook') && (
        <LoginFirebaseSocialAccount
          handleOnClick={() => {
            setAuthenticationForm(
              'Firebase based authentication using Email and Password or Anonymously',
            );
            handleOnClickDispach(method);
          }}
          method={method}
        />
      )}
      {method === 'anonymous' && (
        <LoginFirebaseAnonymous
          handleOnClick={() => {
            setAuthenticationForm(
              'Firebase based authentication using Email and Password or Anonymously',
            );
            handleOnClickDispach(method);
          }}
        />
      )}
      {method === 'email_password' && (
        <LoginFirebaseEmailPass
          onSubmit={() => {
            setAuthenticationForm(
              'Firebase based authentication using Email and Password or Anonymously',
            );
            handleFormSubmit(method);
          }}
        />
      )}
    </>
  );
}

export default LoginFirebaseMethods;
