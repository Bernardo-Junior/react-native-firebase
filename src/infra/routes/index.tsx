
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

