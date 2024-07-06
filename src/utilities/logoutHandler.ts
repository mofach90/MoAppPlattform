export const LogoutHandler = async () => {
  try {
    localStorage.removeItem('jwtToken');

    const result = await fetch('/api/v1/auth/social-auth/logout', {
      method: 'GET',
      credentials: 'include',
    });
    console.log(result.ok);

    if (result.ok) {
      window.open('/', '_self');
    } else {
      console.log('logout failed');
    }
  } catch (error) {
    console.log('An error occurred during logout:', error);
  }
};
