import { getToken, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from '../../../../../config/firebaseConfig';
import { apiClient } from '../../../../../lib/apiClient';

const PushNotification = () => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        const token = await getToken(messaging);
        await apiClient.post<unknown>('/api/v1/todo-app/tasks/get-token', {
          token,
        });
      }
    } catch (error) {
      console.error('Error getting permission for notifications:', error);
    }
  };

  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Customize notification here
      new Notification(payload.notification?.title ?? '', {
        body: payload.notification?.body,
        icon: payload.notification?.icon,
      });
    });
  }, []);

  return (
    <div>
      <h1>Push Notifications with React</h1>
    </div>
  );
};

export default PushNotification;
