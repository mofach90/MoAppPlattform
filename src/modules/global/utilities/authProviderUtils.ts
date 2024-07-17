import { useState } from 'react';
import { authCheckRoutes } from '../../../data/authData';
import { AuthenticationFormType, MyRequest } from '../../../types/authTypes';

const isAuthenticationFormType = (
  authenticationForm: any,
): authenticationForm is AuthenticationFormType => {
  return [
    'Simple Basic Authentication',
    'form-based-authentication using session-id',
    'form-based-authentication using Jwt stored in browser local session',
    'form-based-authentication using Jwt stored in browser cookie',
    'Firebase based authentication using Email and Password or Anonymously',
    'social based authentication',
    '',
  ].includes(authenticationForm);
};
const addTokenToCheckRoute = (authenticationForm: AuthenticationFormType) => {
  if (
    authenticationForm ===
    ('form-based-authentication using Jwt stored in browser cookie' ||
      'form-based-authentication using Jwt stored in browser local session')
  ) {
    const token = localStorage.getItem('jwtToken');
    authCheckRoutes[authenticationForm].headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }
};

const getAuthCheckRoute = (
  authenticationForm: AuthenticationFormType,
): MyRequest => {
  addTokenToCheckRoute(authenticationForm);
  return authCheckRoutes[authenticationForm];
};

const initAuthForm = (): AuthenticationFormType => {
  let storedValue = localStorage.getItem('authenticationForm') ?? '';
  try {
    const parsedValue: unknown = storedValue ? JSON.parse(storedValue) : '';
    if (isAuthenticationFormType(parsedValue)) {
      return parsedValue;
    } else {
      return '';
    }
  } catch (error) {
    console.error('Error parsing stored value:', error);
    return '';
  }
};
export const useAuthProvider = () => {
  const [isAuthenticatedBasic, setIsAuthenticatedBasic] =
    useState<boolean>(false);
  const [isAuthenticatedFirebase, setIsAuthenticatedFirebase] =
    useState<boolean>(false);
  const [isAuthenticatedSessionId, setIsAuthenticatedSessionId] =
    useState<boolean>(false);
  const [isAuthenticatedJwtLocalStorage, setIsAuthenticatedJwtLocalStorage] =
    useState<boolean>(false);
  const [isAuthenticatedJwtCookie, setIsAuthenticatedJwtCookie] =
    useState<boolean>(false);
  const [isAuthenticatedSocialAuth, setIsAuthenticatedSocialAuth] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [authenticationForm, setAuthenticationForm] =
    useState<AuthenticationFormType>(initAuthForm);
  return {
    isAuthenticatedBasic,
    isAuthenticatedFirebase,
    isAuthenticatedSessionId,
    isAuthenticatedJwtLocalStorage,
    isAuthenticatedJwtCookie,
    isAuthenticatedSocialAuth,
    getAuthCheckRoute,
    loading,
    authenticationForm,
    setAuthenticationForm,
    setIsAuthenticatedBasic,
    setLoading,
    setIsAuthenticatedSessionId,
    setIsAuthenticatedJwtLocalStorage,
    setIsAuthenticatedJwtCookie,
    setIsAuthenticatedFirebase,
    setIsAuthenticatedSocialAuth,
  };
};
