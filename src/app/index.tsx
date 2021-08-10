import * as React from 'react';
import Routes from '../infra/routes';
import NotificationContext, { NotificationProvider } from '../data/contexts/Notification';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Global_Primary } from '../utils/global';
import ToastNotification from '../presentation/components/ToastNotification';
import { useContext } from 'react';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Global_Primary} />
      <NavigationContainer>
        <NotificationProvider>
          <ToastNotification/>
          <Routes />
        </NotificationProvider>
      </NavigationContainer>
    </>
  )
}

export default App;