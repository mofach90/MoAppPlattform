import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import CircularProgressWithLabel from "../utilities/LoadingUtility";

interface AuthContextType {
  isAuthenticatedSessionId: boolean;
  isAuthenticatedJwtLocalStorage: boolean;
  isAuthenticatedJwtCookie: boolean;
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
  const [isAuthenticatedJwtLocalStorage, setIsAuthenticatedJwtLocalStorage] =
    useState(false);
  const [isAuthenticatedJwtCookie, setIsAuthenticatedJwtCookie] =
    useState(false);
  const [loading, setLoading] = useState(true);
  const [authenticationForm, setAuthenticationForm] = useState<string>(() => {
    const storedValue = localStorage.getItem("authenticationForm");
    // console.log({storedValue})
    return storedValue ? JSON.parse(storedValue) : "";
  });
  useEffect(() => {
    localStorage.setItem(
      "authenticationForm",
      JSON.stringify(authenticationForm)
    );
  }, [authenticationForm]);

  const checkAuthentication = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("jwtToken");
      console.debug("this is the token from localStorage", token);
      const resultSessionId = await fetch("http://localhost:8000/check-auth", {
        method: "GET",
        credentials: "include",
      });
      const resultJwtLocalStorage = await fetch(
        "http://localhost:8000/check-auth-jwt-local-storage",
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const resultJwtCookie = await fetch(
        "http://localhost:8000/check-auth-jwt-cookie",
        {
          method: "GET",
          credentials: "include",
        }
      );
      // Log the response text
      const dataJwtLocalStorage = await resultJwtLocalStorage.json();
      const dataJwtCookie = await resultJwtCookie.json();
      const dataSessionId = await resultSessionId.json();
      if (dataSessionId.isAuthenticatedSessionId) {
        setIsAuthenticatedSessionId(true);
      }
      if (dataJwtLocalStorage.isAuthenticatedJwtLocalStorage) {
        setIsAuthenticatedJwtLocalStorage(true);
        console.log(
          "status of isAuthenticatedJwtLocalStorage",
          isAuthenticatedJwtLocalStorage
        );
      }
      if (dataJwtCookie.isAuthenticatedJwtCookie) {
        setIsAuthenticatedJwtCookie(true);
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

  const recheckAuthentication = async () => {
    try {
      setLoading(true);
      await checkAuthentication();
    } catch (error) {
      console.log("error from recheckauth : ", error);
    }
  };
  const contextValue = useMemo(
    () => ({
      isAuthenticatedJwtLocalStorage,
      isAuthenticatedJwtCookie,
      isAuthenticatedSessionId,
      loading,
      recheckAuthentication,
      authenticationForm,
      setAuthenticationForm,
    }),
    [
      isAuthenticatedJwtLocalStorage,
      isAuthenticatedJwtCookie,
      isAuthenticatedSessionId,
      loading,
    ]
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
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
