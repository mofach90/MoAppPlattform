export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  recheckAuthentication: () => void;
}
