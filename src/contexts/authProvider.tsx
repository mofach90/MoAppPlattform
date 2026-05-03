import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AuthContextType } from '../data/authData';
import CircularProgressWithLabel from '../modules/global/components/LoadingUtility';

const ALLOWED_EMAIL = import.meta.env.VITE_ALLOWED_EMAIL as string | undefined;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [accessDenied, setAccessDenied] = useState<boolean>(false);

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

          // Populate localStorage so downstream code (task creation, sidebar profile) has user data
          if (email) {
            localStorage.setItem(
              'userCredential',
              JSON.stringify([
                {
                  email,
                  displayName: user?.displayName ?? null,
                  photoURL: user?.photoURL ?? null,
                  phoneNumber: user?.phoneNumber ?? null,
                  providerId: user?.providerId ?? 'google.com',
                  uid: user?.uid ?? '',
                },
              ]),
            );
          }
        }

        if (ALLOWED_EMAIL && email !== ALLOWED_EMAIL) {
          setIsAuthenticated(false);
          setAccessDenied(true);
          await fetch('/api/v1/auth/social-auth/logout', {
            credentials: 'include',
          });
          localStorage.removeItem('userCredential');
        } else {
          setIsAuthenticated(true);
          setAccessDenied(false);
        }
      } else {
        setIsAuthenticated(false);
        setAccessDenied(false);
      }
    } catch (error) {
      console.error('Failure in checkAuthentication', error);
      setIsAuthenticated(false);
      setAccessDenied(false);
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
    () => ({ isAuthenticated, loading, recheckAuthentication, accessDenied }),
    [isAuthenticated, loading, accessDenied],
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
