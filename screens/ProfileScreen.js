import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../app/constants/Colors';
const ProfileScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSave = (params) => {
    console.log('save profile button clicked');
  };

  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
          style={{marginLeft: 10}}>
          <Entypo name="menu" size={35} color={'white'} />
        </TouchableOpacity>
      );
    },
    headerRight: () => {
      return (
        <>
          {/* add condition here */}
          {true ? (
            <TouchableOpacity style={{marginRight: 15}}>
              <ActivityIndicator size="small" color="#fff" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={() => {
                onSave();
              }}>
              <AntDesign name="save" size={25} color={'white'} />
            </TouchableOpacity>
          )}
        </>
      );
    },
  });
  return (
    <>
      <SafeAreaView>
        <View style={styles.profileScreen}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/images/user.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.dataContainer}>
            <View>
              <TextInput />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  profileScreen: {
    height: '100%',
    backgroundColor: '#fff',
  },
  imgContainer: {
    marginTop: '3%',
    alignItems: 'center',
  },
  image: {height: 100, width: 100},
});
