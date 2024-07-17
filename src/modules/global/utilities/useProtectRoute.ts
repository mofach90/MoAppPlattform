import { useEffect, useState } from 'react';
import { getCurrentAuthFlow } from './getCurrentAuthFlow';
import useAuthStates from './useAuthStates';

export interface AuthFlow {
  isAuthenticated: boolean;
  path: string;
  message: string;
}

type UseProtectRoute = () => {
  isDemoRouteProtected: boolean;
  isMainRouteProtected: boolean;
  currentLoginPath: AuthFlow['path'];
  isLoading: boolean;
};

const useProtectRoute: UseProtectRoute = () => {
  const { loading, authenticationForm, authStates } = useAuthStates();
  const [isMainRouteProtected, setMainIsRouteProtected] =
    useState<boolean>(false);
  const [isDemoRouteProtected, setDemoIsRouteProtected] =
    useState<boolean>(false);
  const [currentLoginPath, setCurrentLoginPath] = useState<string>('');
  const isAuthCheckloading = loading;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!isAuthCheckloading) {
      const currentAuthFlow = getCurrentAuthFlow(
        authenticationForm,
        authStates,
      );
      console.log('currentAuthFlow:', currentAuthFlow);

      const isAuthenticated =
        currentAuthFlow && currentAuthFlow.isAuthenticated;
      console.log('isAuthenticated:', isAuthenticated);

      if (
        isAuthenticated &&
        authenticationForm ===
          'Firebase based authentication using Email and Password or Anonymously'
      ) {
        console.log('Setting main route protected');
        setMainIsRouteProtected(true);
      } else if (
        isAuthenticated &&
        authenticationForm !==
          'Firebase based authentication using Email and Password or Anonymously'
      ) {
        setDemoIsRouteProtected(true);
      }

      setCurrentLoginPath(currentAuthFlow.path);
    }
    setIsLoading(false);
  }, [isAuthCheckloading, authenticationForm, authStates]);

  useEffect(() => {
    if (!isLoading) {
      console.log('State updated:', {
        isMainRouteProtected,
        isDemoRouteProtected,
        currentLoginPath,
      });
    }
  }, [isMainRouteProtected, isDemoRouteProtected, currentLoginPath]);

  return {
    isMainRouteProtected,
    isDemoRouteProtected,
    currentLoginPath,
    isLoading,
  };
};

export default useProtectRoute;
