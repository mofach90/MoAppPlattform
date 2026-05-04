export interface CurrentUser {
  email: string;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
  providerId: string;
  uid: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  recheckAuthentication: () => void;
  accessDenied: boolean;
  currentUser: CurrentUser | null;
}
