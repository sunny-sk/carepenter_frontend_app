import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Colors from '../app/constants/Colors';
import SplashScreen from 'react-native-splash-screen';
import Entypo from 'react-native-vector-icons/Entypo';

const AuthScreen = (props) => {
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.primary);
  }, []);

  return (
    <>
      <View>
        <Text style={{textAlign: 'center'}}>Auth Screen</Text>
        <Button
          title="later"
          onPress={() => {
            props.navigation.replace('categories');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default AuthScreen;
