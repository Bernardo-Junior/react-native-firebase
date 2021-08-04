import * as React from 'react';
import { Text } from 'react-native';

import Routes from '../infra/routes';

import { NotificationProvider } from '../data/contexts/Notification';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Global_Primary } from '../utils/global';


function App() {
  
  return (
    <>
      <StatusBar backgroundColor={Global_Primary} />
      <NavigationContainer>
        <NotificationProvider>
          <Routes />
        </NotificationProvider>
      </NavigationContainer>
    </>
  )
}

export default App;