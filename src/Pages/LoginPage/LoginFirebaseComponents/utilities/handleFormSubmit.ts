import { useAuth } from "../../../../contexts/authProvider";
import { valueType } from "../LoginFirebaseEmailPass";
import { handleOnClickDispach } from "./handleOnClickDispach";
import { handleOnSignUp } from "./handleOnSignUp";

export const handleFormSubmit = async (values: valueType) => {
    const { setAuthenticationForm } = useAuth();

    setAuthenticationForm(
      'Firebase based authentication using Email and Password or Anonymously',
    );
    if (values.actionType === 'signIn') {
      await handleOnClickDispach(values);
    } else if (values.actionType === 'signUp') {
      await handleOnSignUp(values);
    }
  };