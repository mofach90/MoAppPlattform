
import { AuthStates } from './useAuthStates';
import { AuthFlow, AuthenticationFormType } from './useNavigate';

export const getCurrentAuthFlow = (
  currentAuthenticationForm: AuthenticationFormType,
  authStates: AuthStates,
): AuthFlow => {
  const authFlows: Record<AuthenticationFormType, AuthFlow> = {
    'Simple Basic Authentication': {
      isAuthenticated: authStates.basic,
      path: '/',
      message: ' You are not authenticated using Simple Basic Authentication',
    },
    'form-based-authentication using session-id': {
      isAuthenticated: authStates.sessionId,
      path: '/login',
      message: ' You are not authenticated with your Session-Id ',
    },
    'form-based-authentication using Jwt stored in browser local session': {
      isAuthenticated: authStates.jwtLocalStorage,
      path: '/login-jwt-stored-in-localSession',
      message: ' You are not authenticated with your Jwt in localSession',
    },
    'form-based-authentication using Jwt stored in browser cookie': {
      isAuthenticated: authStates.jwtCookie,
      path: '/login-jwt-stored-in-cookie',
      message: ' You are not authenticated with your Jwt in cookie ',
    },
    'social based authentication': {
      isAuthenticated: authStates.socialMedia,
      path: '/login-with-social-networks',
      message: ' You are not authenticated with your Social Network Account ',
    },
    'Firebase based authentication using Email and Password or Anonymously': {
      isAuthenticated: authStates.firebase,
      path: '/login-with-firebase',
      message:
        ' You are not authenticated with Firebase using Email and Password  ',
    },
    '': {
      isAuthenticated: false,
      path: '/',
      message: 'Choose your Login Option',
    },
  };
  return authFlows[currentAuthenticationForm];
};
