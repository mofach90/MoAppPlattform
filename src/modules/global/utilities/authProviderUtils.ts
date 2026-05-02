import { useState } from 'react';

export const useAuthProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  return {
    isAuthenticated,
    setIsAuthenticated,
    loading,
    setLoading,
  };
};
