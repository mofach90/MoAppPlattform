import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authProvider';
import CircularProgressWithLabel from './LoadingUtility';

function ProtectRoute({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login-with-social-networks');
    }
  }, [loading, isAuthenticated, navigate]);

  return <>{loading ? <CircularProgressWithLabel /> : children}</>;
}

export default ProtectRoute;
