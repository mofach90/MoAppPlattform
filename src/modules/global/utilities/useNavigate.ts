import { useEffect, useState } from 'react';
import { getCurrentAuthFlow } from '../../global/utilities/getCurrentAuthFlow';
import useAuthStates from '../../global/utilities/useAuthStates';

export type AuthenticationFormType =
  | ''
  | 'form-based-authentication using session-id'
  | 'Simple Basic Authentication'
  | 'form-based-authentication using Jwt stored in browser local session'
  | 'form-based-authentication using Jwt stored in browser cookie'
  | 'social based authentication'
  | 'Firebase based authentication using Email and Password or Anonymously';
export interface AuthFlow {
  isAuthenticated: boolean;
  path: string;
  message: string;
}
type UseProtectRoute = () => {
  isRouteProtected: boolean;
  currentLoginPath: AuthFlow['path'];
};

const useProtectRoute: UseProtectRoute = () => {
  const { loading, authenticationForm, authStates } = useAuthStates();
  const [isRouteProtected, setIsRouteProtected] = useState<boolean>(true);
  const [currentLoginPath, setCurrentLoginPath] = useState<string>('');
  const isAuthCheckloading = loading;

  console.log('Initial auth states FROM USEAUTHNAV: ', {
    loading,
    authenticationForm,
    authStates,
  });

  useEffect(() => {
    if (!isAuthCheckloading) {
      const currentAuthFlow = getCurrentAuthFlow(
        authenticationForm,
        authStates,
      );
      console.log({ currentAuthFlow });
      console.log({ authenticationForm });
      if (currentAuthFlow && !currentAuthFlow.isAuthenticated) {
        setIsRouteProtected(false);
        setCurrentLoginPath(currentAuthFlow.path);
      }
    }
  }, [isAuthCheckloading]);
  return { isRouteProtected, currentLoginPath };
};

export default useProtectRoute;
