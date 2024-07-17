import { handleFormSubmit } from '../../utilities/handleFormSubmit';
import { handleOnClickDispach } from '../../utilities/handleOnClickDispach';
import LoginFirebaseAnonymous from './anonymous-method/LoginFirebaseAnonymous';
import LoginFirebaseEmailPass from './email-and-password-method/LoginFirebaseEmailPass';
import LoginFirebaseSocialAccount from './social-account-method/LoginFirebaseSocialAccount';

function LoginFirebaseMethods({ method }: { method: string }) {
  return (
    <>
      {(method === 'google' || method === 'facebook') && (
        <LoginFirebaseSocialAccount
          handleOnClick={() => handleOnClickDispach(method)}
          method={method}
        />
      )}
      {method === 'anonymous' && (
        <LoginFirebaseAnonymous
          handleOnClick={() => handleOnClickDispach(method)}
        />
      )}
      {method === 'email_password' && (
        <LoginFirebaseEmailPass
          onSubmit={() => {
            handleFormSubmit(method);
          }}
        />
      )}
    </>
  );
}

export default LoginFirebaseMethods;
