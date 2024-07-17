import { Dispatch, SetStateAction } from "react";
import { AuthenticationFormType, authCheckRoutesType } from "../types/authTypes";

export const authCheckRoutes: authCheckRoutesType = {
    'Simple Basic Authentication': {
      path: '/check-basic-authentication',
      method: 'GET',
      credentials: 'include',
    },
    'form-based-authentication using session-id': {
      path: '/check-session-id-cookie',
      method: 'GET',
      credentials: 'include',
    },
    'form-based-authentication using Jwt stored in browser local session': {
      path: '/check-jwt-local-storage',
      method: 'GET',
      credentials: 'include',
    },
    'form-based-authentication using Jwt stored in browser cookie': {
      path: '/check-jwt-cookie',
      method: 'GET',
      credentials: 'include',
    },
  
    'Firebase based authentication using Email and Password or Anonymously': {
      path: '/check-firebase-authentication',
      method: 'GET',
      credentials: 'include',
    },
    'social based authentication': {
      path: '/check-google-auth',
      method: 'GET',
      credentials: 'include',
    },
    '': {
      path: '/',
      method: 'GET',
      credentials: 'include',
    },
  };
  export interface AuthContextType {
    isAuthenticatedSessionId: boolean;
    isAuthenticatedBasic: boolean;
    isAuthenticatedJwtLocalStorage: boolean;
    isAuthenticatedJwtCookie: boolean;
    isAuthenticatedSocialAuth: boolean;
    isAuthenticatedFirebase: boolean;
    loading: boolean;
    recheckAuthentication: () => void;
    setAuthenticationForm: Dispatch<SetStateAction<AuthenticationFormType>>;
    setIsAuthenticatedBasic: Dispatch<SetStateAction<boolean>>;
    authenticationForm: AuthenticationFormType;
  }