import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authProvider";

function ProtectRoute({ children }: { children: Readonly<React.ReactNode> }) {
  const {
    isAuthenticatedSessionId,
    isAuthenticatedJwtLocalStorage,
    isAuthenticatedJwtCookie,
    loading,
    authenticationForm,
  } = useAuth();
  const navigate = useNavigate();
  console.log("Initial auth states: ", {
    isAuthenticatedSessionId,
    isAuthenticatedJwtLocalStorage,
    isAuthenticatedJwtCookie,
    loading,
    authenticationForm,
  });

  useEffect(() => {
    if (!loading) {
      if (
        !isAuthenticatedSessionId &&
        authenticationForm === "form-based-authentication using session-id"
      ) {
        navigate("/login");
        console.log(" You are not authenticated with your Session-Id ");
      } else if (
        !isAuthenticatedJwtLocalStorage &&
        authenticationForm ===
          "form-based-authentication using Jwt stored in browser local session"
      ) {
        navigate("/login-jwt-stored-in-localSession");
        console.log(" You are not authenticated with your Jwt ");
      } else if (
        !isAuthenticatedJwtCookie &&
        authenticationForm ===
          "form-based-authentication using Jwt stored in browser Cookie"
      ) {
        navigate("/login-jwt-stored-in-cookie");
        console.log(" You are not authenticated with your Jwt ");
      } else if (
        !isAuthenticatedJwtLocalStorage &&
        !isAuthenticatedJwtCookie &&
        !isAuthenticatedSessionId &&
        authenticationForm === ""
      ) {
        navigate("/");
        console.log("Choose your Login Option");
      }
    }
  }, [
    isAuthenticatedJwtLocalStorage,
    authenticationForm,
    isAuthenticatedJwtCookie,
    isAuthenticatedSessionId,
    loading,
    navigate,
  ]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default ProtectRoute;
