import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { apiClient, HttpError } from '../lib/apiClient';
import { AuthContextType, CurrentUser } from '../data/authData';
import CircularProgressWithLabel from '../modules/global/components/LoadingUtility';

const ALLOWED_EMAIL = import.meta.env.VITE_ALLOWED_EMAIL as string | undefined;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthCheckUser {
  email?: string;
  displayName?: string | null;
  photoURL?: string | null;
  phoneNumber?: string | null;
  providerId?: string;
  uid?: string;
}

interface AuthCheckResponse {
  user?: AuthCheckUser;
  userData?: AuthCheckUser;
  email?: string;
  displayName?: string | null;
  photoURL?: string | null;
  phoneNumber?: string | null;
  providerId?: string;
  uid?: string;
}

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [accessDenied, setAccessDenied] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const checkAuthentication = async () => {
    setLoading(true);
    let data: AuthCheckResponse | undefined;
    try {
      data = await apiClient.get<AuthCheckResponse>(
        '/api/v1/auth/check-google-auth',
      );
    } catch (error) {
      if (!(error instanceof HttpError)) {
        console.error('Failure in checkAuthentication', error);
      }
      setIsAuthenticated(false);
      setAccessDenied(false);
      setCurrentUser(null);
      setLoading(false);
      return;
    }

    const user: AuthCheckUser | undefined =
      data?.user ?? data?.userData ?? data;
    const email = user?.email ?? null;

    if (email) {
      setCurrentUser({
        email,
        displayName: user?.displayName ?? null,
        photoURL: user?.photoURL ?? null,
        phoneNumber: user?.phoneNumber ?? null,
        providerId: user?.providerId ?? 'google.com',
        uid: user?.uid ?? '',
      });
    }

    const emailMismatch =
      email !== null && ALLOWED_EMAIL && email !== ALLOWED_EMAIL;
    if (emailMismatch) {
      setIsAuthenticated(false);
      setAccessDenied(true);
      setCurrentUser(null);
      await apiClient.get('/api/v1/auth/social-auth/logout').catch(() => {});
    } else {
      setIsAuthenticated(true);
      setAccessDenied(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const recheckAuthentication = async () => {
    await checkAuthentication();
  };

  const contextValue = useMemo(
    () => ({
      isAuthenticated,
      loading,
      recheckAuthentication,
      accessDenied,
      currentUser,
    }),
    [isAuthenticated, loading, accessDenied, currentUser],
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
