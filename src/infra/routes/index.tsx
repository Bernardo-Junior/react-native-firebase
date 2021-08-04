import React from 'react';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

import { styles } from './styles';

import Home from '../../presentation/pages/Home';

import Sino_Ativo from '../../assets/icons/sino_ativo.svg';

import Sino_Inativo from '../../assets/icons/sino_inativo.svg';
import { Text } from 'react-native';


// const HomeStack: React.FC = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={() => ({
//         headerShown: false,
//         gestureDirection: 'horizontal',
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//       })}
//       initialRouteName="Home"
//     >
//       <Stack.Screen name="Home" component={Home}/>
//     </Stack.Navigator>
//   )
// }

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Blog') {
            if (focused === true) {
              return (
                <Sino_Ativo
                  style={styles.svg}
                />
              )
            } else {
              return (
                <Sino_Inativo
                  style={styles.svg}
                />
              )
            }
          }
        },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case 'Perfil':
              return label = focused ?
                <Text style={styles.activeTabText}>PERFIL</Text>
                :
                <Text style={styles.inactiveTabText}>PERFIL</Text>
            case 'MeuCiclo':
              return label = focused ?
                <Text style={styles.activeTabText}>MEU CICLO</Text>
                :
                <Text style={styles.inactiveTabText}>MEU CICLO</Text>
            case 'Blog':
              return label = focused ?
                <Text style={styles.activeTabText}>BLOG</Text>
                :
                <Text style={styles.inactiveTabText}>BLOG</Text>
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
      initialRouteName="MeuCiclo"
    >
      <Tab.Screen name="Home" component={Home} />

    </Tab.Navigator>
  )
}

export default Routes;

