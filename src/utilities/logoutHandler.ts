import { NavigateFunction } from 'react-router-dom';

export const LogoutHandler = async (navigate: NavigateFunction) => {
  try {
    localStorage.removeItem('jwtToken');

    const result = await fetch('/api/v1/auth/social-auth/logout', {
      method: 'GET',
      credentials: 'include',
    });

    if (result.ok) {
      navigate('/');
    } else {
      console.log('logout failed');
    }
  } catch (error) {
    console.log('An error occurred during logout:', error);
  }
};
