import { Auth, signInAnonymously } from "firebase/auth";

export const firebaseSignInAnonymously = (auth: Auth) => {
    return signInAnonymously(auth);
  };