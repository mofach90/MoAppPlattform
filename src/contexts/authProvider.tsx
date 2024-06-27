import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import CircularProgressWithLabel from '../utilities/LoadingUtility';

interface AuthContextType {
  isAuthenticatedSessionId: boolean;
  isAuthenticatedBasic: boolean;
  isAuthenticatedJwtLocalStorage: boolean;
  isAuthenticatedJwtCookie: boolean;
  isAuthenticatedSocialAuth: boolean;
  isAuthenticatedFirebaseEmailPassword: boolean;
  loading: boolean;
  recheckAuthentication: () => void;
  setAuthenticationForm: Dispatch<SetStateAction<string>>;
  setIsAuthenticatedBasic: Dispatch<SetStateAction<boolean>>;
  authenticationForm: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticatedBasic, setIsAuthenticatedBasic] =
    useState<boolean>(false);
  const [
    isAuthenticatedFirebaseEmailPassword,
    setIsAuthenticatedFirebaseEmailPassword,
  ] = useState<boolean>(false);
  const [isAuthenticatedSessionId, setIsAuthenticatedSessionId] =
    useState<boolean>(false);
  const [isAuthenticatedJwtLocalStorage, setIsAuthenticatedJwtLocalStorage] =
    useState<boolean>(false);
  const [isAuthenticatedJwtCookie, setIsAuthenticatedJwtCookie] =
    useState<boolean>(false);
  const [isAuthenticatedSocialAuth, setIsAuthenticatedSocialAuth] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [authenticationForm, setAuthenticationForm] = useState<string>(() => {
    const storedValue = localStorage.getItem('authenticationForm');
    return storedValue ? JSON.parse(storedValue) : '';
  });
  useEffect(() => {
    localStorage.setItem(
      'authenticationForm',
      JSON.stringify(authenticationForm),
    );
  }, [authenticationForm]);

  const checkAuthentication = async () => {
    try {
      setLoading(true);
      const responseBasicAuth = await fetch(
        `/api/v1/auth/check-basic-authentication`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );
      const resultSessionId = await fetch(
        '/api/v1/auth/check-session-id-cookie',
        {
          method: 'GET',
          credentials: 'include',
        },
      );
      const resultFirebaseAuthCheck = await fetch(
        '/api/v1/auth/check-firebase-authentication',
        {
          method: 'GET',
          credentials: 'include',
        },
      );
      const token = localStorage.getItem('jwtToken');
      const resultJwtLocalStorage = await fetch(
        '/api/v1/auth/check-jwt-local-storage',
        {
          method: 'GET',
          credentials: 'include',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      const resultGoogleAuth = await fetch('/api/v1/auth/check-google-auth', {
        method: 'GET',
        credentials: 'include',
      });
      const resultJwtCookie = await fetch('/api/v1/auth/check-jwt-cookie', {
        method: 'GET',
        credentials: 'include',
      });
      const dataJwtLocalStorage = await resultJwtLocalStorage.json();
      const dataJwtCookie = await resultJwtCookie.json();
      const dataSessionId = await resultSessionId.json();
      const dataBasicAuthentication = await responseBasicAuth.json();
      const dataFirebaseAuthCheck = await resultFirebaseAuthCheck.json();
      console.log({dataFirebaseAuthCheck })
      if (dataBasicAuthentication.isAuthenticatedBasic) {
        setIsAuthenticatedBasic(true);
      }
      if (dataSessionId.isAuthenticatedSessionId) {
        setIsAuthenticatedSessionId(true);
      }
      if (resultGoogleAuth.ok) {
        setIsAuthenticatedSocialAuth(true);
      }
      if (dataJwtLocalStorage.isAuthenticatedJwtLocalStorage) {
        setIsAuthenticatedJwtLocalStorage(true);
      }
      if (dataJwtCookie.isAuthenticatedJwtCookie) {
        setIsAuthenticatedJwtCookie(true);
      }
      if (dataFirebaseAuthCheck.isAuthenticatedFirebaseEmailPassword) {
        console.log("PROOOOF")
        setIsAuthenticatedFirebaseEmailPassword(true);
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
      'isAuthenticatedFirebaseEmailPassword in use effect',
      isAuthenticatedFirebaseEmailPassword,
    );
  }, [isAuthenticatedFirebaseEmailPassword]);

  // }
  // function checkFirebaseAuthentication(): Promise<void> {
  //   return new Promise((resolve) => {
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         console.log('User is logged In', user.uid);
  //         console.log('user details  : ', user);
  //         setIsAuthenticatedFirebaseEmailPassword(true);
  //       } else {
  //         console.log('User is Not Logged in');
  //         setIsAuthenticatedFirebaseEmailPassword(false);
  //       }
  //       resolve();
  //     });
  //   });
  // }

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
      isAuthenticatedFirebaseEmailPassword,
    }),
    [
      isAuthenticatedJwtLocalStorage,
      isAuthenticatedJwtCookie,
      isAuthenticatedSessionId,
      isAuthenticatedBasic,
      isAuthenticatedSocialAuth,
      loading,
      recheckAuthentication,
      isAuthenticatedFirebaseEmailPassword,
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
