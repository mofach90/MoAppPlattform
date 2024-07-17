// ProtectRoute.tsx
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { versionContext } from '../../../contexts/versionprovider';
import { backToLogin } from '../utilities/backToLogin';
import useProtectRoute from '../utilities/useProtectRoute';
import CircularProgressWithLabel from './LoadingUtility';

function ProtectRoute({ children }: Readonly<{ children: React.ReactNode }>) {
  const { isMainRouteProtected, isDemoRouteProtected, currentLoginPath,isLoading } = useProtectRoute();
  const { version } = useContext(versionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMainRouteProtected !== null && isDemoRouteProtected !== null) {
    }
  }, [isMainRouteProtected, isDemoRouteProtected]);

  useEffect(() => {
    if (!isLoading) {
      console.log("Redirect check");
      if (version === 'main' && !isMainRouteProtected) {
        console.log("enter if - main");
        backToLogin("/login-with-firebase", navigate);
        // navigate("/")
        console.log("enter if - main done");
      } else if (version === 'demo' && !isDemoRouteProtected) {
        console.log("enter if - demo");
        backToLogin(currentLoginPath, navigate);
        // navigate(currentLoginPath)
        console.log("enter if - demo done");
      }
    }
  }, [isDemoRouteProtected, version, isMainRouteProtected, currentLoginPath, navigate, isLoading]);

  console.log("Object:", { isMainRouteProtected, isDemoRouteProtected, currentLoginPath });
  console.log('condition', version === 'main' && isMainRouteProtected === false);


  return <>{isLoading ? <CircularProgressWithLabel /> : children}</>;
}

export default ProtectRoute;
