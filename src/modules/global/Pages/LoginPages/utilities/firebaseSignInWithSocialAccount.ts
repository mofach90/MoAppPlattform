import {
  Auth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export const firebaseSignInWithSocialAccount = async (
  auth: Auth,
  providerType?: string,
) => {
  let provider: FacebookAuthProvider | GoogleAuthProvider;
  if (providerType === 'google') {
    provider = new GoogleAuthProvider();
  } else {
    provider = new FacebookAuthProvider();
  }
  return signInWithPopup(auth, provider);
};
