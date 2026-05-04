import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AuthContextType, CurrentUser } from '../data/authData';
import CircularProgressWithLabel from '../modules/global/components/LoadingUtility';

const ALLOWED_EMAIL = import.meta.env.VITE_ALLOWED_EMAIL as string | undefined;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [accessDenied, setAccessDenied] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  const checkAuthentication = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/v1/auth/check-google-auth', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        let email: string | null = null;

        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          const data = await response.json();
          // Handle common backend response shapes
          const user = data?.user ?? data?.userData ?? data;
          email = user?.email ?? null;

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
        }

        const emailMismatch =
          email !== null && ALLOWED_EMAIL && email !== ALLOWED_EMAIL;
        if (emailMismatch) {
          setIsAuthenticated(false);
          setAccessDenied(true);
          setCurrentUser(null);
          await fetch('/api/v1/auth/social-auth/logout', {
            credentials: 'include',
          });
        } else {
          setIsAuthenticated(true);
          setAccessDenied(false);
        }
      } else {
        setIsAuthenticated(false);
        setAccessDenied(false);
        setCurrentUser(null);
      }
    } catch (error) {
      console.error('Failure in checkAuthentication', error);
      setIsAuthenticated(false);
      setAccessDenied(false);
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
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
