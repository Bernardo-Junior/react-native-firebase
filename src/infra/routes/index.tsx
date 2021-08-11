
import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

import { styles } from './styles';

import Home from '../../presentation/pages/Home';

import Sobre from '../../presentation/pages/Sobre';

import Sino_Ativo from '../../assets/icons/sino_ativo.svg';

import Sino_Inativo from '../../assets/icons/sino_inativo.svg';

import Sobre_Ativo from '../../assets/icons/sobre_ativo.svg';

import Sobre_Inativo from '../../assets/icons/sobre_inativo.svg';

import { Text } from 'react-native';

import messaging from '@react-native-firebase/messaging';
import { useContext } from 'react';
import NotificationContext from '../../data/contexts/Notification';
import moment from 'moment';

const Routes: React.FC = () => {
  const { notification, setNotification, notifications, setNotifications } = useContext(NotificationContext);
  const atual = new Date();

  var control = false;

  messaging().onMessage(async remoteMessage => {
    if(remoteMessage?.notification != undefined)
      setNotification(remoteMessage?.notification);
  });

  // Esse é o listener que será ouvido quando o aplicativo estiver em segundo plano. (Background)
  messaging().onNotificationOpenedApp(async remoteMessage => {
    if(remoteMessage?.notification != undefined) {
      setTimeout(() => {
        setNotifications([...notifications, {
          id: (Math.random() * (9999 - 1) + 1),
          body: remoteMessage?.notification?.body,
          title: remoteMessage?.notification?.title,
          date: moment(atual).format("DD/MM/YYYY")
        }])
      }, 5000)
    }
  });

  // Esse é o listener que será ouvido quando o aplicativo estiver fechado totalmente. (Quit)
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    if(remoteMessage?.notification != undefined) {
      setTimeout(() => {
        setNotifications([...notifications, {
          id: (Math.random() * (9999 - 1) + 1),
          body: remoteMessage?.notification?.body,
          title: remoteMessage?.notification?.title,
          date: moment(atual).format("DD/MM/YYYY")
        }])
      }, 5000)
    }
  })

  return (
    
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            if (focused === true) {
              return (
                <Sino_Ativo
                  width={styles.svg.width}
                  height={styles.svg.height}
                />
              )
            } else {
              return (
                <Sino_Inativo
                  width={styles.svg.width}
                  height={styles.svg.height}
                />
              )
            }
          } else {
            if (focused === true) {
              return (
                <Sobre_Ativo
                  width={styles.svg.width}
                  height={styles.svg.height}
                />
              )
            } else {
              return (
                <Sobre_Inativo
                  width={styles.svg.width}
                  height={styles.svg.height}
                />
              )
            }
          }
        },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case 'Home':
              return label = focused ?
                <Text style={styles.activeTabText}>HOME</Text>
                :
                <Text style={styles.inactiveTabText}>HOME</Text>
            case 'Sobre':
              return label = focused ?
              <Text style={styles.activeTabText}>SOBRE</Text>
              :
              <Text style={styles.inactiveTabText}>SOBRE</Text>
          }
          return label
        }
      })}
      tabBarOptions={{
        tabStyle: styles.tabStyle,
        activeTintColor: '#FFFFFF',
        labelStyle: styles.labelStyle,
        style: styles.tabBar,
        labelPosition: "below-icon",
        inactiveTintColor: '#73265C',
      }}
      
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />

    </Tab.Navigator>
  )
}

export default Routes;

