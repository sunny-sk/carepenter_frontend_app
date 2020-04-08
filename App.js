import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';

import Colors from './app/constants/Colors';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';

import {WelcomeStackScreens} from './app/navigation/StackScreen';
import DrawerNavigator from './app/navigation/DrawerNavigator';
import AsyncStorage from '@react-native-community/async-storage';

import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import categoriesReducers from './store/reducers/categoriesReducers';
enableScreens();
const App = (props) => {
  // const [welcome, setWelcome] = useState(true);

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
  const rootReducer = combineReducers({
    categories: categoriesReducers,
  });
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
  // }
};
export default App;
