import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';

import Colors from './constants/Colors';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {WelcomeStackScreens} from './navigation/StackScreen';
import DrawerNavigator from './navigation/DrawerNavigator';
import AsyncStorage from '@react-native-community/async-storage';

enableScreens();
const App = props => {
  // const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // const checkWelcome = async () => {
  //   const value = await AsyncStorage.getItem('welcome');
  //   if (value === 'set') {
  //     setWelcome(false);
  //     SplashScreen.hide();
  //   } else {
  //     SplashScreen.hide();
  //   }
  // };

  // const notified = () => {
  //   console.log('clicked');
  //   checkWelcome();
  // };

  // if (welcome) {
  //   return (
  //     <>
  //       <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
  //       <SafeAreaProvider>
  //         <NavigationContainer>
  //           <WelcomeStackScreens notify={notified} />
  //         </NavigationContainer>
  //       </SafeAreaProvider>
  //     </>
  //   );
  // } else {
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
  // }
};
export default App;
