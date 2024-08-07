import { initializeApp } from 'firebase/app';

import 'firebase/messaging';
import { getMessaging } from 'firebase/messaging';

importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ?? '',
  authDomain: import.meta.env.VITE_AUTH_DOMAIN ?? '',
  projectId: import.meta.env.VITE_PROJECT_ID ?? '',
  storageBucket: import.meta.env.VITE_STORAGEBUCKET ?? '',
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID ?? '',
  appId: import.meta.env.VITE_APP_ID ?? '',
  measurementId: import.meta.env.VITE_MEASUREMENT_ID ?? '',
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

messaging.setBackgroundMessageHandler(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
});
