import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthContextType {
  isAuthenticatedSessionId: boolean;
  isAuthenticatedJwt: boolean;
  // setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  recheckAuthentication: () => void;
  setAuthenticationForm: Dispatch<SetStateAction<string>>;
  authenticationForm: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticatedSessionId, setIsAuthenticatedSessionId] =
    useState(false);
  const [isAuthenticatedJwt, setIsAuthenticatedJwt] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authenticationForm, setAuthenticationForm] = useState<string>(() => {
    const storedValue = localStorage.getItem("authenticationForm");
    // console.log({storedValue})
    return storedValue ? JSON.parse(storedValue) : "";
  });
  useEffect(() => {
    localStorage.setItem("authenticationForm", JSON.stringify(authenticationForm))

  }, [authenticationForm])
  

  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        setLoading(false);
      }

      console.debug("this is the token from localStorage", token);
      const resultSessionId = await fetch("http://localhost:8000/check-auth", {
        method: "GET",
        credentials: "include",
      });
      const resultJwt = await fetch("http://localhost:8000/check-auth-jwt", {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      // Log the response text
      const dataJwt = await resultJwt.json();
      const dataSessionId = await resultSessionId.json();
      console.log("dataSessionId",dataSessionId)

      if (dataSessionId.isAuthenticatedSessionId) {
        setIsAuthenticatedSessionId(true);
        console.debug(" isAuthenticated from AuthProvider", {
          isAuthenticatedSessionId,
        });
      } else if (dataJwt.isAuthenticatedJwt) {
        setIsAuthenticatedJwt(true);
        console.debug(" isAuthenticated from AuthProvider", {
          isAuthenticatedJwt,
        });
      }
    } catch (error) {
      console.error("Failure in checkAuthentication", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuthentication();
  }, []);

  const recheckAuthentication = () => {
    setLoading(true);
    checkAuthentication();
  };
  console.log("AuthenticationForm inside auth provider", authenticationForm);

  const contextValue = useMemo(
    () => ({
      isAuthenticatedJwt,
      isAuthenticatedSessionId,
      loading,
      recheckAuthentication,
      authenticationForm,
      setAuthenticationForm,
    }),
    [isAuthenticatedJwt, isAuthenticatedSessionId, loading]
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
