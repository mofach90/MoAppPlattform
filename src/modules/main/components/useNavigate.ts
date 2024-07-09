import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStates, { AuthStates } from './useAuthStates';
import { AuthenticationFormType } from '../../../contexts/authProvider';

interface AuthRoute {
  isAuthenticated: boolean;
  path: string;
  message: string;
}
type UseAuthNavigate = () => void;



const getAuthRoute = (
  currentAuthenticationForm: AuthenticationFormType,
  authStates: AuthStates,
): AuthRoute => {
  const authRoutes: Record<AuthenticationFormType, AuthRoute> = {
    'Firebase based authentication using Email and Password or Anonymously': {
      isAuthenticated: authStates.firebase,
      path: '/login-with-firebase',
      message:
        ' You are not authenticated with Firebase using Email and Password  ',
    },
    '': {
      isAuthenticated: authStates.firebase,
      path: '/',
      message: 'Choose your Login Option',
    },
  };
  const authRoute: AuthRoute = authRoutes[currentAuthenticationForm];

  return authRoute;
};

const useAuthNavigate: UseAuthNavigate = () => {
  const { loading, authenticationForm, authStates } = useAuthStates();
  const navigate = useNavigate();

  console.log('Initial auth states FROM USEAUTHNAV: ', {
    loading,
    authenticationForm,
    authStates,
  });

  useEffect(() => {
    if (!loading) {
      const authRoute = getAuthRoute(authenticationForm, authStates);
      console.log({ authRoute });
      console.log({ authenticationForm });
      if (!authRoute.isAuthenticated) {
        navigate(authRoute.path);
        console.log(authRoute.message);
      }
    }
  }, [authStates, authenticationForm, loading, navigate]);
};

export default useAuthNavigate;
