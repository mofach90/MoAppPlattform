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
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  loading: boolean
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true)

  const checkAuthentication = async () => {
    try {
      const result = await fetch("http://localhost:8000/check-auth", {
        method: "GET",
        credentials: "include",
      });
      const data = await result.json();
      console.debug("data",data.isAuthenticated);

      if (data.isAuthenticated) {
        setIsAuthenticated(true);
        console.debug("from AuthProvider",{isAuthenticated});
      }
    } catch (error) {
      console.error("Failure in checkAuthentication", error);
    }
    finally{
      setLoading(false)
    }
  };
    useEffect(() => {
  checkAuthentication();
    }, [])
    
  const contextValue = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated, loading }),
    [isAuthenticated,loading]
  );
  console.log({contextValue})

  return (
    <AuthContext.Provider value={contextValue}>{!loading&&children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
