import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { AuthContextType } from '../data/authData';
import CircularProgressWithLabel from '../modules/global/components/LoadingUtility';
import { useAuthProvider } from '../modules/global/utilities/authProviderUtils';
import { MyRequest } from '../types/authTypes';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const {
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
    setIsAuthenticatedSocialAuth
  } = useAuthProvider();

  useEffect(() => {
    localStorage.setItem(
      'authenticationForm',
      JSON.stringify(authenticationForm),
    );
  }, [authenticationForm]);

  const checkAuthentication = async () => {
    try {
      setLoading(true);
      const authCheckRoute: MyRequest = getAuthCheckRoute(authenticationForm);

      console.log('authCheckRoute ', authCheckRoute);
      // const MyResponse = await fetch(`/api/v1/auth${authCheckRoute.path}`, {
      //   method: authCheckRoute.method,
      //   credentials: authCheckRoute.credentials,
      // });

      const getAuthStateFromBackend = async (authCheckRoute: MyRequest ) => {
        const response = await fetch(`/api/v1/auth${authCheckRoute.path}`, {
          method: authCheckRoute.method,
          credentials: authCheckRoute.credentials,
        });
        console.log("response", response)
        const contentType = response.headers.get('Content-Type')
        console.log("contentType ", contentType)
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json()
          console.log("DATA", data)
          return data
        } else return response
      }

      const dataMyResponse: any = await getAuthStateFromBackend(authCheckRoute)
        console.log('dataMyResponse', dataMyResponse);
        if (dataMyResponse.isAuthenticatedBasic) {
          setIsAuthenticatedBasic(true);
        }
        if (dataMyResponse.isAuthenticatedSessionId) {
          setIsAuthenticatedSessionId(true);
        }

        if (dataMyResponse.isAuthenticatedJwtLocalStorage) {
          setIsAuthenticatedJwtLocalStorage(true);
        }
        if (dataMyResponse.isAuthenticatedJwtCookie) {
          setIsAuthenticatedJwtCookie(true);
        }
        if (dataMyResponse.isAuthenticatedFirebase) {
          setIsAuthenticatedFirebase(true);
        }
        if (
          dataMyResponse.ok &&
          authenticationForm === 'social based authentication'
        ) {
          setIsAuthenticatedSocialAuth(true);
        }
      
      } catch (error) {
      console.error('Failure in checkAuthentication', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    console.log(
      'isAuthenticatedFirebase in use effect',
      isAuthenticatedFirebase,
    );
  }, [isAuthenticatedFirebase]);

  const recheckAuthentication = async () => {
    try {
      setLoading(true);
      await checkAuthentication();
    } catch (error) {
      console.error('error from recheckauth : ', error);
    }
  };
  const contextValue = useMemo(
    () => ({
      isAuthenticatedJwtLocalStorage,
      isAuthenticatedJwtCookie,
      isAuthenticatedSessionId,
      isAuthenticatedBasic,
      isAuthenticatedSocialAuth,
      loading,
      recheckAuthentication,
      authenticationForm,
      setAuthenticationForm,
      setIsAuthenticatedBasic,
      isAuthenticatedFirebase,
    }),
    [
      isAuthenticatedJwtLocalStorage,
      isAuthenticatedJwtCookie,
      isAuthenticatedSessionId,
      isAuthenticatedBasic,
      isAuthenticatedSocialAuth,
      loading,
      recheckAuthentication,
      isAuthenticatedFirebase,
    ],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? <CircularProgressWithLabel /> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
