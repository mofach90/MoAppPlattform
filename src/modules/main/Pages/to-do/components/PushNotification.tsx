import { getToken, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { messaging } from '../../../../../config/firebaseConfig';

const PushNotification = () => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      const permission =await Notification.requestPermission();
      if (permission === 'granted') {
        
          const token = await getToken(messaging,
            //     {
                //     vapidKey:
                //       'BMyrgk4-oc7Z53E99SZb0MdWaIquk2x7CClDfYamWfUwgeSVrwkkGI2w4E-aroPwEHQMEhhg0vnlBpvUWnVD_ac',
                //   }
                
            );
            console.log('FCM Token:', token);
            const result = await fetch(`/api/v1/todo-app/tasks/get-token`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({token}),
                credentials: 'include',
            });
        }
      // You can now send the token to your server to send notifications to this device
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
