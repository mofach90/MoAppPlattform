
import { FirebaseApp, initializeApp } from "firebase/app";

import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCi2iKtys-iQEzk4xyUBGSga6ZRIj5P474',
  authDomain: 'moappplattform.firebaseapp.com',
  projectId: 'moappplattform',
  storageBucket: 'moappplattform.appspot.com',
  messagingSenderId: '194275636901',
  appId: '1:194275636901:web:6e30e526cea121ce0cff4c',
  measurementId: 'G-1EQP137JS9',
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(firebaseApp)
