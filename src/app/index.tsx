import * as React from 'react';
import { Text } from 'react-native';

import Routes from '../infra/routes';

import { NotificationProvider } from '../data/contexts/Notification';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  
  return (
    <NavigationContainer>
      <NotificationProvider>
        <Routes />
      </NotificationProvider>
    </NavigationContainer>
  )
}

export default App;