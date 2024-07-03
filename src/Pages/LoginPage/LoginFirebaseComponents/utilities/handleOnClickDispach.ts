import { auth } from "../../../../config/firebaseConfig";
import { valueType } from "../LoginFirebaseEmailPass";
import { firebaseSignInAnonymously } from "./firebaseSignInAnoumously";
import { firebaseSignInWithEmailAndPassword } from "./firebaseSignInWithEmailAndPassword";
import { firebaseSignInWithSocialAccount } from "./firebaseSignInWithSocialAccount";
import { handleOnClick } from "./handleOnClick";

export const handleOnClickDispach: (
setAuthenticationForm: (value: string) => void,
method?: string,
  values?: valueType,

) => Promise<void> = async (setAuthenticationForm,method,values) => {
  
  console.log("Hello from Dispatch ", method)
    if (method === 'google') {
    await handleOnClick(
      () => firebaseSignInWithSocialAccount(auth, 'google'),
      setAuthenticationForm,
    );
  } else if (method === 'facebook') {
    await handleOnClick(
      () => firebaseSignInWithSocialAccount(auth, 'facebook'),
       setAuthenticationForm,
    );
  } else if (method === 'anonymous') {
    await handleOnClick(
      () => firebaseSignInAnonymously(auth),
      setAuthenticationForm,
    );
  } else if (method === 'email_password' && values) {
    await handleOnClick(
      () => firebaseSignInWithEmailAndPassword(values),
      setAuthenticationForm,
    );
  }
};
