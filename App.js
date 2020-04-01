import React from 'react';
import {StatusBar, Text} from 'react-native';

import Colors from './app/constants/Colors';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeStackScreens from './app/navigation/StackScreen';

import DrawerNavigator from './app/navigation/DrawerNavigator';

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
