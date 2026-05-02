import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
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
        const stored = localStorage.getItem('userCredential');
        const userData = stored ? JSON.parse(stored) : null;
        const email: string | null = Array.isArray(userData) ? (userData[0]?.email ?? null) : null;

        if (ALLOWED_EMAIL && email === ALLOWED_EMAIL) {
          setIsAuthenticated(true);
          setAccessDenied(false);
        } else {
          // Authenticated with Google but not in the allowed list — end the session
          setIsAuthenticated(false);
          setAccessDenied(true);
          await fetch('/api/v1/auth/social-auth/logout', { credentials: 'include' });
          localStorage.removeItem('userCredential');
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
