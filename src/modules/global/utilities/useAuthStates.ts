import { AuthContextType, useAuth } from '../../../contexts/authProvider';

export interface AuthStates {
  firebase: boolean;
  basic: boolean;
  sessionId: boolean;
  jwtLocalStorage: boolean;
  jwtCookie: boolean;
  socialMedia: boolean;
}

interface UseAuthStatesReturnType
  extends Pick<AuthContextType, 'authenticationForm' | 'loading'> {
  authStates: AuthStates;
}

const useAuthStates: () => UseAuthStatesReturnType = () => {
  const {
    loading,
    authenticationForm,
    isAuthenticatedFirebase,
    isAuthenticatedBasic,
    isAuthenticatedSessionId,
    isAuthenticatedJwtLocalStorage,
    isAuthenticatedJwtCookie,
    isAuthenticatedSocialAuth,
  } = useAuth();
  const authStates: AuthStates = {
    firebase: isAuthenticatedFirebase,
    basic: isAuthenticatedBasic,
    sessionId: isAuthenticatedSessionId,
    jwtLocalStorage: isAuthenticatedJwtLocalStorage,
    jwtCookie: isAuthenticatedJwtCookie,
    socialMedia: isAuthenticatedSocialAuth,
  };
  return { loading, authenticationForm, authStates };
};

export default useAuthStates;
