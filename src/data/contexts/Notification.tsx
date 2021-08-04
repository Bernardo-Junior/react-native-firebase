import React,  { createContext } from "react";
import { useState } from "react";
import { INotificationContext } from "../protocols/Notification";
import messaging from '@react-native-firebase/messaging';

const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

export const NotificationProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState<String>("");

  React.useEffect(() => {
   
    requestUserPermission();

  }, [])
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
      if (enabled) {
        if (!messaging().isDeviceRegisteredForRemoteMessages) {
          messaging().registerDeviceForRemoteMessages();
        }
        let token = await getFcmToken();
        if (token == null){
          console.warn("O token retornou nulo")
          return;
        }
        console.log("Meu token:" + token)
      
      }
  }

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    return fcmToken ? fcmToken : null;
  }

  return (
    <NotificationContext.Provider value={{ message }}>
      { children }
    </NotificationContext.Provider>
  )
}

export default NotificationContext;