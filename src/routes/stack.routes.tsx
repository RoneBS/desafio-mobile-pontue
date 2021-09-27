import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import  Login from '../Login';
import { Home } from '../Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const stackRoutes = createStackNavigator();

export const AppRoutes = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: Colors.white
      }
    }}
    >
      <stackRoutes.Screen
        name="Login"
        component={Login}
      />

      <stackRoutes.Screen
        name="Home"
        component={Home}
      />
    </stackRoutes.Navigator>
)

