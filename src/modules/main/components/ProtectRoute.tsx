import React from 'react';
import useAuthNavigate from './useNavigate';

function ProtectRoute({ children }: Readonly<{ children: React.ReactNode }>) {
  useAuthNavigate();

  return <>{children}</>;
}

export default ProtectRoute;
// function ProtectRoute({ children }: Readonly<{ children: React.ReactNode }>) {
//   const { loading, authenticationForm, isAuthenticatedFirebase } = useAuth();
//   const navigate = useNavigate();
//   console.log('Initial auth states: ', {
//     loading,
//     authenticationForm,
//     isAuthenticatedFirebase,
//   });

//   useEffect(() => {
//     if (!loading) {
//       if (
//         !isAuthenticatedFirebase &&
//         authenticationForm ===
//           'Firebase based authentication using Email and Password or Anonymously'
//       ) {
//         navigate('/login-with-firebase');
//         console.log(
//           ' You are not authenticated with Firebase using Email and Password  ',
//         );
//       } else if (!isAuthenticatedFirebase && authenticationForm === '') {
//         navigate('/');
//         console.log('Choose your Login Option');
//       }
//     }
//   }, [authenticationForm, loading, navigate]);

//   return <>{children}</>;
// }

// export default ProtectRoute;
