/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/app';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().onNotificationOpenedApp(async remoteMessage => {
  console.log(remoteMessage.data);
});

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(remoteMessage.data);
})

messaging()
  .getInitialNotification()
  .then(remoteMessage => {
    if (remoteMessage && remoteMessage.data) {
      console.log(remoteMessage.data);
    }

  });

messaging().onMessage(async remoteMessage => {
  console.log(remoteMessage.data);
});


function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <App />;
}


AppRegistry.registerComponent(appName, () => HeadlessCheck);
