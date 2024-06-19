import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authProvider";

function ProtectRoute({ children }: Readonly<{ children: React.ReactNode }>) {
  const {
    isAuthenticatedSessionId,
    isAuthenticatedJwtLocalStorage,
    isAuthenticatedJwtCookie,
    isAuthenticatedBasic,
    isAuthenticatedSocialAuth,
    loading,
    authenticationForm,
    
  } = useAuth();
  const navigate = useNavigate();
  console.log("Initial auth states: ", {
    isAuthenticatedSessionId,
    isAuthenticatedJwtLocalStorage,
    isAuthenticatedJwtCookie,
    isAuthenticatedBasic,
    isAuthenticatedSocialAuth,
    loading,
    authenticationForm,
  });

  useEffect(() => {
    if (!loading) {
      if (
        !isAuthenticatedBasic &&
        authenticationForm === "Simple Basic Authentication"
      ) {
        navigate("/");
        console.log(
          " You are not authenticated using Simple Basic Authentication"
        );
      } else if (
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
        console.log(" You are not authenticated with your Jwt in localSession");
      } else if (
        !isAuthenticatedJwtCookie &&
        authenticationForm ===
          "form-based-authentication using Jwt stored in browser cookie"
      ) {
        navigate("/login-jwt-stored-in-cookie");
        console.log(" You are not authenticated with your Jwt in cookie ");
      } else if (
        !isAuthenticatedSocialAuth &&
        authenticationForm === "social based authentication"
      ) {
        navigate("/login-with-social-networks");
        console.log(" You are not authenticated with your Social Network Account ");
      } else if (
        !isAuthenticatedJwtLocalStorage &&
        !isAuthenticatedJwtCookie &&
        !isAuthenticatedSessionId &&
        !isAuthenticatedSocialAuth &&
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

  return <>{children}</>;
}

export default ProtectRoute;
