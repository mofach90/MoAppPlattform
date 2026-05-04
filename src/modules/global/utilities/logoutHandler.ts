import { apiClient } from '../../../lib/apiClient';

export const LogoutHandler = async () => {
  try {
    await apiClient.get<unknown>('/api/v1/auth/social-auth/logout');
  } finally {
    window.open('/', '_self');
  }
};
