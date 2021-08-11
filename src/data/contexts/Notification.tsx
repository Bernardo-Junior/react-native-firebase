import React,  { createContext } from "react";
import { useState } from "react";
import { INotification, INotificationContext, INotificationStorage } from "../protocols/Notification";
import messaging from '@react-native-firebase/messaging';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from "react";

const NotificationContext = createContext<INotificationContext>({} as INotificationContext);

export const NotificationProvider: React.FC = ({ children }) => {
  const [notification, setNotification] = useState<INotification | null>({} as INotification);
  const [notifications, setNotifications] = useState<INotificationStorage[]>([]);

  useEffect(() => {
    requestUserPermission();
    buscarDadosStorage();
  }, [])

  useEffect(() => {
    if(notifications.length > 0) {
      salvarStorage();
    }
  }, [notifications])

  const salvarStorage = async () => {
    try {
        await AsyncStorage.setItem('@notificacoes', JSON.stringify(notifications));
    } catch(err) {
      console.log(err)
    }
  }


  const buscarDadosStorage = async () => {
    try {
      let resultAsync =  await AsyncStorage.getItem('@notificacoes');
      
      if(resultAsync != undefined) {
        setNotifications(JSON.parse(resultAsync));
      } else {
        setNotifications([]);
      }
    } catch(err) {
      console.log("Erro"+err)
    }
  }
  
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
    <NotificationContext.Provider value={{ notification, setNotification, notifications, setNotifications }}>
      { children }
    </NotificationContext.Provider>
  )
}

export default NotificationContext;