import { AuthenticationFormType, useAuth } from '../../../contexts/authProvider';


export interface AuthStates {
  firebase: boolean;
}
type UseAuthStatesType = () => {
  loading: boolean;
  authenticationForm: AuthenticationFormType;
  authStates: AuthStates;
};

const useAuthStates: UseAuthStatesType = () => {
  const { loading, authenticationForm, isAuthenticatedFirebase } = useAuth();
  const authStates: AuthStates = {
    firebase: isAuthenticatedFirebase,
  };
  return { loading, authenticationForm, authStates };
};

export default useAuthStates;
