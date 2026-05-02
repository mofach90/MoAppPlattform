import { apiClient } from '../../../lib/apiClient';

export const LogoutHandler = async () => {
  try {
    localStorage.removeItem('jwtToken');
    await apiClient.get<unknown>('/api/v1/auth/social-auth/logout');
    window.open('/', '_self');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
