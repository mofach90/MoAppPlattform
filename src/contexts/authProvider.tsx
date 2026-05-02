import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContextType } from '../data/authData';
import CircularProgressWithLabel from '../modules/global/components/LoadingUtility';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const checkAuthentication = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/v1/auth/check-google-auth', {
        method: 'GET',
        credentials: 'include',
      });
      setIsAuthenticated(response.ok);
    } catch (error) {
      console.error('Failure in checkAuthentication', error);
      setIsAuthenticated(false);
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
    () => ({ isAuthenticated, loading, recheckAuthentication }),
    [isAuthenticated, loading],
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
