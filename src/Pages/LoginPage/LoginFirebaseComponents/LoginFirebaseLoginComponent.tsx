import LoginFirebaseAnonymous from './LoginFirebaseAnonymous';
import LoginFirebaseEmailPass from './LoginFirebaseEmailPass';
import LoginFirebaseSocialAccount from './LoginFirebaseSocialAccount';
import { handleFormSubmit } from './utilities/handleFormSubmit';
import { handleOnClickDispach } from './utilities/handleOnClickDispach';

function LoginFirebase({ method }: { method: string }) {
  return (
    <>
      {(method === 'google' || method === 'facebook') && (
        <LoginFirebaseSocialAccount
          handleOnClick={handleOnClickDispach}
          method={method}
        />
      )}
      {method === 'anonymous' && (
        <LoginFirebaseAnonymous handleOnClick={handleOnClickDispach} />
      )}
      {method === 'email_password' && (
        <LoginFirebaseEmailPass onSubmit={handleFormSubmit} />
      )}
    </>
  );
}

export default LoginFirebase;
