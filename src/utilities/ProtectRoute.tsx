import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authProvider";

function ProtectRoute({ children }: { children: Readonly<React.ReactNode> }) {
  const {
    isAuthenticatedSessionId,
    isAuthenticatedJwt,
    loading,
    authenticationForm,
  } = useAuth();
  const navigate = useNavigate();
  setTimeout(function () {

  console.log("Initial auth states: ", {
    isAuthenticatedSessionId,
    isAuthenticatedJwt,
    loading,
    authenticationForm,
  });

  useEffect(() => {
      if (!loading) {
        console.log("Auth check conditions: ", {
          isAuthenticatedSessionId,
          isAuthenticatedJwt,
          authenticationForm,
        });

        if (
          !isAuthenticatedSessionId &&
          authenticationForm === "form-based-authentication using session-id"
        ) {
          navigate("/login");
          console.log(
            " You are not authenticated with your Session-Id ",
            isAuthenticatedSessionId
          );
        } else if (
          !isAuthenticatedJwt &&
          authenticationForm === "form-based-authentication using Jwt"
        ) {
          navigate("/loginJwt");
          console.log(
            " You are not authenticated with your Jwt ",
            isAuthenticatedJwt
          );
        } else if (
          !isAuthenticatedJwt &&
          !isAuthenticatedSessionId &&
          authenticationForm === ""
        ) {
          navigate("/");
          console.log("Choose your Login Option");
        }
      }
      console.log("AuthenticationForm inside protect", authenticationForm);
    }, [isAuthenticatedJwt, isAuthenticatedSessionId, loading, navigate]);
}, 1000);
  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default ProtectRoute;
