import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Colors';

//welcome screens
import Walkthrough1 from '../components/Walkthrough1';
import Walkthrough2 from '../components/Walkthrough2';
import Walkthrough3 from '../components/Walkthrough3';
import ProfileScreen from '../../screens/ProfileScreen';
import CategoriesScreen from '../../screens/CategoriesScreen';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import TabNavigator from './TabScreen';
import ContactScreen from '../../screens/ContactScreen';
import CategoryTypeScreen from '../../screens/CategoryTypeScreen';

const stack = createStackNavigator();

const YourComponent = (props) => (
  <Walkthrough3 click={props.notify} {...props} />
);

export function WelcomeStackScreens(paasedProps) {
  console.log('Zdf', paasedProps);
  return (
    <stack.Navigator
      keyboardHandlingEnabled={true}
      headerMode="screen"
      mode="card">
      <stack.Screen
        name="Walkthrough1"
        component={Walkthrough1}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="Walkthrough2"
        component={Walkthrough2}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="Walkthrough3"
        component={YourComponent}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
}

export function ProfileStackScreen() {
  return (
    <stack.Navigator keyboardHandlingEnabled={false}>
      <stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center', // make header title on center,
        }}
      />
    </stack.Navigator>
  );
}
export function ContactScreenStack() {
  return (
    <stack.Navigator keyboardHandlingEnabled={false}>
      <stack.Screen
        name="contact"
        component={ContactScreen}
        options={{
          title: 'Contact',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center', // make header title on center,
        }}
      />
    </stack.Navigator>
  );
}

export function mainStackScreen() {
  return (
    <stack.Navigator keyboardHandlingEnabled={false}>
      {/* <stack.Screen
        name="home"
        component={CategoriesScreen}
        options={{headerShown: false}}
      /> */}
      <stack.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center', // make header title on center,
        }}
      />
      <stack.Screen
        name="categoryType"
        component={CategoryTypeScreen}
        options={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center', // make header title on center,
        }}
      />
      <stack.Screen
        name="detail"
        component={DetailScreen}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center', // make header title on center,
        }}
      />
    </stack.Navigator>
  );
}

// export function HomeScreenStack() {
//   return (
//     <stack.Navigator keyboardHandlingEnabled={false}>
//       <stack.Screen
//         name="home"
//         component={HomeScreen}
//         options={{
//           title: 'Home',
//           headerStyle: {
//             backgroundColor: Colors.primary,
//           },
//           headerTintColor: '#fff',
//           headerTitleAlign: 'center', // make header title on center,
//         }}
//       />
//     </stack.Navigator>
//   );
// }
// export function CategoriesScreenStack() {
//   return (
//     <stack.Navigator keyboardHandlingEnabled={false}>
//       <stack.Screen
//         name="categories"
//         component={CategoriesScreen}
//         options={{
//           title: 'Categories',
//           headerStyle: {
//             backgroundColor: Colors.primary,
//           },
//           headerTintColor: '#fff',
//           headerTitleAlign: 'center', // make header title on center,
//         }}
//       />
//     </stack.Navigator>
//   );
// }
