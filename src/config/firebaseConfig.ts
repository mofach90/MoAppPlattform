import { FirebaseApp, initializeApp } from 'firebase/app';

import { Auth, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? '',
  projectId: import.meta.env.VITE_PROJECT_ID ?? '',
  storageBucket: import.meta.env.VITE_STORAGEBUCKET ?? '',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? '',
  appId: import.meta.env.VITE_APP_ID ?? '',
  measurementId: import.meta.env.VITE_MEASUREMENT_ID ?? '',
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(firebaseApp);
