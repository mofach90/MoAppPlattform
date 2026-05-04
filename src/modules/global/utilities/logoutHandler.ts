import { apiClient } from '../../../lib/apiClient';

export const LogoutHandler = async () => {
  try {
    await apiClient.get<unknown>('/api/v1/auth/social-auth/logout');
  } finally {
    localStorage.removeItem('userCredential');
    window.open('/', '_self');
  }
};
