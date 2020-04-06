import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreenStack, CategoriesScreenStack} from './StackScreen';
import Colors from '../constants/Colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 11,
        },
        activeTintColor: Colors.primary,
        inactiveTintColor: '#c6c6c6',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AntDesign
              name="home"
              size={20}
              color={focused ? Colors.primary : '#c6c6c6'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="categories"
        component={CategoriesScreenStack}
        options={{
          tabBarIcon: ({color, focused}) => (
            <AntDesign
              name="appstore-o"
              size={20}
              color={focused ? Colors.primary : '#c6c6c6'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
