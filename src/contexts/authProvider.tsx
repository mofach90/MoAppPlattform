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
  isAuthenticatedBasic: boolean;
  isAuthenticatedJwtLocalStorage: boolean;
  isAuthenticatedJwtCookie: boolean;
  loading: boolean;
  recheckAuthentication: () => void;
  setAuthenticationForm: Dispatch<SetStateAction<string>>;
  setIsAuthenticatedBasic: Dispatch<SetStateAction<boolean>>;
  authenticationForm: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticatedBasic, setIsAuthenticatedBasic] =
    useState<boolean>(false);

  const [isAuthenticatedSessionId, setIsAuthenticatedSessionId] =
    useState<boolean>(false);
  const [isAuthenticatedJwtLocalStorage, setIsAuthenticatedJwtLocalStorage] =
    useState<boolean>(false);
  const [isAuthenticatedJwtCookie, setIsAuthenticatedJwtCookie] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
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
      const resultSessionId = await fetch("/api/v1/auth/check-session-id-cookie", {
        method: "GET",
        credentials: "include",
      });
      const resultJwtLocalStorage = await fetch(
        "/api/v1/auth/check-jwt-local-storage",
        {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // const resultGoogleAuth = await fetch(
      //   "/api/v1/auth/",
      //   {
      //     method: "GET",
      //     credentials: "include",
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      const resultJwtCookie = await fetch("/api/v1/auth/social-auth/google", {
        method: "GET",
        credentials: "include",
      });
      // Log the response text
      const dataJwtLocalStorage = await resultJwtLocalStorage.json();
      const dataJwtCookie = await resultJwtCookie.json();
      const dataSessionId = await resultSessionId.json();
      // const dataGoogleAuth = await resultGoogleAuth.json();
      // console.log("dataGoogleAuth",dataGoogleAuth)
      //  resultSessionId.json().then((data)=>{

      //   console.log("Data", data)
      // });
      console.log("this ist the response that i wait for",dataJwtCookie); //TODO delete
      if (dataSessionId.isAuthenticatedSessionId) {
        setIsAuthenticatedSessionId(true);
      }
      if (dataJwtLocalStorage.isAuthenticatedJwtLocalStorage) {
        setIsAuthenticatedJwtLocalStorage(true);
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
      isAuthenticatedBasic,
      loading,
      recheckAuthentication,
      authenticationForm,
      setAuthenticationForm,
      setIsAuthenticatedBasic,
    }),
    [
      isAuthenticatedJwtLocalStorage,
      isAuthenticatedJwtCookie,
      isAuthenticatedSessionId,
      isAuthenticatedBasic,
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
