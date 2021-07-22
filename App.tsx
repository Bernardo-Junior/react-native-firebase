import * as React from 'react';
import { Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App() {
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
    <>
    <Text>Teste</Text>
    </>
  )
}

export default App;