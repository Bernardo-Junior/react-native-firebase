/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/app';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

// Esse é o listener que será ouvido quando o aplicativo estiver em segundo plano. (Background)
messaging().onNotificationOpenedApp(async remoteMessage => {
  console.log(remoteMessage.data);
});

// Esse é o listener que será ouvido quando o aplicativo estiver fechado totalmente. (Quit)
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(remoteMessage.data);
})

// Esse listener será ouvido caso o aplicativo seja aberto por outros meios.
messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    if (remoteMessage && remoteMessage.data) {
      console.log(remoteMessage.data);
    }

  });


// Esse listener será ouvido caso a notificação chegue com o app aberto. (Foreground)
messaging().onMessage(async remoteMessage => {
  // console.log(remoteMessage.notification.body);
});


const HeadlessCheck =  ({ isHeadless }) => {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
}


AppRegistry.registerComponent(appName, () => HeadlessCheck);
