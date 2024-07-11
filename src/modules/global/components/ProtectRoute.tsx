import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { backToLogin } from '../utilities/backToLogin';
import useProtectRoute from '../utilities/useNavigate';

function ProtectRoute({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isRouteProtected, currentLoginPath } = useProtectRoute();

  const navigate = useNavigate();
  console.log({ isRouteProtected, currentLoginPath });
  useEffect(() => {
    if (!isRouteProtected) {
      backToLogin(currentLoginPath, navigate);
    }
  }, [isRouteProtected, currentLoginPath, navigate]);

  return <>{children}</>;
}

export default ProtectRoute;
