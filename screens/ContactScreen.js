import React from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  View,
  Linking,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/CustomButton';
import Colors from '../constants/Colors';

const ContactScreen = (props) => {
  const onSend = () => {};
  const onCall = () => {
    Linking.openURL('tel:${9891531824}');
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
        <View style={{marginLeft: 10}}>
          {/* add condition */}
          {true ? (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => {
                onCall();
              }}>
              <Ionicons name="ios-call" size={26} color={'white'} />
            </TouchableOpacity>
          ) : (
            <ActivityIndicator size="small" color="#ffff" />
          )}
        </View>
      );
    },
  });
  return (
    <>
      <View style={styles.screen}>
        {/* message */}
        <View style={{marginTop: 10}}>
          <Text style={styles.inputTitle}>Name</Text>
          <View style={{}}>
            <TextInput
              multiline
              numberOfLines={1}
              value={'your name'}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={{marginTop: 7}}>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={{marginTop: 4}}>
            <TextInput
              multiline
              numberOfLines={1}
              value={'your email'}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.inputTitle}>message</Text>
          <View style={{marginTop: 4}}>
            <TextInput
              multiline
              numberOfLines={4}
              value={'your message'}
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <View style={{width: '25%'}}>
            <Buttons
              click={() => {
                onSend();
              }}
              style={styles.buttonStyle}
              {...props}>
              ADD
            </Buttons>
          </View>
        </View>
      </View>
    </>
  );
};
export default ContactScreen;

const styles = StyleSheet.create({
  screen: {backgroundColor: '#ffff', height: '100%'},
  inputTitle: {
    color: '#c6c6c6',
    marginLeft: '5%',
  },
  textInput: {
    borderBottomColor: '#c6c6c6',
    width: '90%',
    marginLeft: '5%',
    borderBottomWidth: 1,
  },
  buttonStyle: {
    color: 'white',
    backgroundColor: Colors.primary,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
});
