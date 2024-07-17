export interface MyRequest {
  path: string;
  method: RequestInit['method'];
  credentials: RequestInit['credentials'];
  headers?: RequestInit['headers'];
}

export type authCheckRoutesType = Record<AuthenticationFormType, MyRequest>;

export type AuthenticationFormType =
  | 'Simple Basic Authentication'
  | 'form-based-authentication using session-id'
  | 'form-based-authentication using Jwt stored in browser local session'
  | 'form-based-authentication using Jwt stored in browser cookie'
  | 'Firebase based authentication using Email and Password or Anonymously'
  | 'social based authentication'
  | '';
