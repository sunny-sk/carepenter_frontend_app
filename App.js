import React from 'react';
import {StatusBar, Text} from 'react-native';

import Colors from './constants/Colors';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeStackScreens from './navigation/StackScreen';

import DrawerNavigator from './navigation/DrawerNavigator';

enableScreens();
const App = props => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};
export default App;
