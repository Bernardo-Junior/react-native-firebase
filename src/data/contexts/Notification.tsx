import React,  { createContext } from "react";
import { useState } from "react";
import { INotification, INotificationContext } from "../protocols/Notification";
import messaging from '@react-native-firebase/messaging';

const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

export const NotificationProvider: React.FC = ({ children }) => {
  const [notification, setNotification] = useState<INotification | null>({} as INotification);

  React.useEffect(() => {
    requestUserPermission();
  }, [])
  
    const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
      if (enabled) {
        if (!messaging().isDeviceRegisteredForRemoteMessages) {
         await messaging().registerDeviceForRemoteMessages();
        }

        var token = await getFcmToken();

        if (token == null){
          console.log("O token retornou nulo")
          return;
        } else {
          console.log("Meu token:" + token)
        }
      
      }
  }

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    return fcmToken ? fcmToken : null;
  }

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      { children }
    </NotificationContext.Provider>
  )
}

export default NotificationContext;