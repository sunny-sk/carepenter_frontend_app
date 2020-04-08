import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  View,
  Linking,
  Alert,
  Keyboard,
  Modal,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Buttons from './../app/components/CustomButton';
import Colors from './../app/constants/Colors';
import Snackbar from 'react-native-snackbar';
//redux
import {contactUs, getPhoneNumbers} from '../store/action/commonActions';
import {useDispatch} from 'react-redux';

const ContactScreen = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLaoding] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState();
  const dispatch = useDispatch();
  const loadPhoneNumbers = async () => {
    try {
      setIsLaoding(true);
      const result = await dispatch(getPhoneNumbers());
      setPhoneNumbers(result.phoneNumbers[0].phone);
      setIsLaoding(false);
    } catch (error) {
      setIsLaoding(false);
      console.log(error);
    }
  };
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Screen was focused
      console.log('Contact screen screen focused');
      // load tasks
      loadPhoneNumbers();
    });

    return unsubscribe;
  }, [loadPhoneNumbers]);

  //on Send Messages
  const onSend = async () => {
    try {
      Keyboard.dismiss();
      if (name === '' || email === '' || message === '') {
        Snackbar.show({
          text: 'Please fill all fields',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: Colors.cancel,
          action: {
            text: 'try again',
            textColor: '#fff',
            onPress: () => {},
          },
        });
        return;
      }
      setIsLaoding(true);
      const data = await dispatch(contactUs({name, email, message}));
      console.log(data);
      setName('');
      setEmail('');
      setMessage('');
      setIsLaoding(false);
      Snackbar.show({
        text: 'Your message submitted',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: Colors.success,
        action: {
          text: 'Success',
          textColor: '#fff',
          onPress: () => {},
        },
      });
    } catch (error) {
      setIsLaoding(false);
      Snackbar.show({
        text: error.message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: Colors.cancel,
        action: {
          text: 'try again',
          textColor: '#fff',
          onPress: () => {},
        },
      });
    }
  };

  //onClick call
  const onCall = () => {
    Keyboard.dismiss();
    Linking.openURL(`tel:${phoneNumbers}`);
  };

  //Header
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
          {!isLoading ? (
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => {
                onCall();
              }}>
              <Ionicons name="ios-call" size={26} color={'white'} />
            </TouchableOpacity>
          ) : (
            <View style={{marginRight: 10}}>
              <ActivityIndicator size="small" color="#ffff" />
            </View>
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
            {/* name */}
            <TextInput
              multiline
              numberOfLines={1}
              value={name}
              placeholder="i.e. xyz"
              onChangeText={(text) => setName(text)}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={{marginTop: 7}}>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={{marginTop: 4}}>
            {/* email */}
            <TextInput
              multiline
              numberOfLines={1}
              value={email}
              placeholder="i.e. xyz@mail.com"
              onChangeText={(email) => setEmail(email)}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.inputTitle}>message</Text>
          <View style={{marginTop: 4}}>
            {/* message */}
            <TextInput
              multiline
              numberOfLines={4}
              value={message}
              placeholder="i.e.  type your message"
              onChangeText={(message) => setMessage(message)}
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
