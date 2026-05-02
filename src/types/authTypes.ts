export interface MyRequest {
  path: string;
  method: RequestInit['method'];
  credentials: RequestInit['credentials'];
}
