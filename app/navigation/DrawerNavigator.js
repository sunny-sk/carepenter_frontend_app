import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {
  ProfileStackScreen,
  ContactScreenStack,
  mainStackScreen,
  WelcomeStackScreens,
} from './StackScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{height: 130, width: '100%'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Image
            style={{height: 80, width: 80}}
            source={require('./../../assets/images/user.png')}
          />
        </View>
      </View>
      <View>
        <DrawerItemList {...props} />
      </View>
      <View style={{width: '100%', height: 400}}>
        <Text style={{textAlign: 'center', marginTop: '10%', color: '#c6c6c6'}}>
          V 1.0.0
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerNavigator(props) {
  useEffect((params) => {
    console.log('in drawer navigator');
  }, []);

  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => CustomDrawerContent(props)}
        drawerType="slide"
        drawerContentOptions={{
          activeTintColor: '#7047a3',
          // activeBackgroundColor: '#000',
          inactiveTintColor: '#000',
          inactiveBackgroundColor: '#fff',
          labelStyle: {
            //text style for drawer
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="main" // routing name
          component={mainStackScreen}
          options={{
            title: 'Home',
            drawerIcon: (props) => {
              return (
                <Text>
                  <AntDesign
                    name="home"
                    size={23}
                    color={props.focused ? '#7047a3' : 'black'}
                  />
                </Text>
              );
            },
          }}
        />
        {/* <Drawer.Screen
          name="profile" // routing name
          component={ProfileStackScreen}
          options={{
            title: 'Profile',

            drawerIcon: props => {
              return (
                <Text>
                  <AntDesign
                    name="user"
                    size={23}
                    color={props.focused ? '#7047a3' : 'black'}
                  />
                </Text>
              );
            },
          }}
        /> */}
        <Drawer.Screen
          name="contact" // routing name
          component={ContactScreenStack}
          options={{
            title: 'Contact us',
            drawerIcon: (props) => {
              return (
                <Text>
                  <AntDesign
                    name="contacts"
                    size={23}
                    color={props.focused ? '#7047a3' : 'black'}
                  />
                </Text>
              );
            },
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerNavigator;
