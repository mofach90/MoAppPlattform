import { NavigateFunction } from 'react-router-dom';
import { useAuth } from '../contexts/authProvider';

export const LogoutHandler = async (
  navigate: NavigateFunction,
  recheckAuthentication: () => void,
) => {
  console.log('enter logoutHandler');
  console.log('debug 1 logoutHandler');
  localStorage.removeItem('jwtToken');
  console.log('debug 2 logoutHandler');

  const result = await fetch('/api/v1/auth/social-auth/logout', {
    method: 'GET',
    credentials: 'include',
  });
  //   await recheckAuthentication();

  // const data = await result.json()
  // console.log({data})
  console.log({ result });

  if (result.ok) {
    navigate('/');
  } else console.log('logout failed');
};
