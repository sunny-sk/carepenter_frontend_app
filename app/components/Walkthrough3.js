import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import Circle from './Circle';
import Colors from '../constants/Colors';
import AsyncStorage from '@react-native-community/async-storage';
const Walkthrough3 = React.memo(function (props) {
  const moveNext = async () => {
    try {
      await AsyncStorage.setItem('welcome', 'set');
      console.log(props);
      props.click();
    } catch (error) {}
    // props.navigation.navigate('main');
  };

  return (
    <View style={{backgroundColor: Colors.primary, height: '100%'}}>
      <SafeAreaView>
        <View style={{alignItems: 'center', marginTop: '30%'}}>
          <Image
            source={require('./../../assets/images/walkthrough3-1.png')}
            style={{height: 150}}
          />
        </View>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: '15%',
            color: '#fff',
          }}>
          Customers
        </Text>

        <View style={{width: '80%', marginLeft: '10%', marginTop: '2%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: '#c6c6c6',
            }}>
            more than 1000+ happy customers more than 1000+ happy customers
          </Text>
        </View>
        <View style={styles.circleContainer}>
          <Circle style={styles.circleStyle} />
          <Circle style={styles.circleStyle} />
          <Circle
            style={{
              ...styles.circleStyle,
              borderColor: '#fff',
              backgroundColor: '#fff',
            }}
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => {
              moveNext();
            }}>
            <Text
              style={{
                textAlign: 'right',
                marginRight: '10%',
                marginTop: '3%',

                padding: 10,
                backgroundColor: Colors.primary,
                borderRadius: 6,
                color: '#fff',
              }}>
              Let's Start
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
});

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circleStyle: {
    height: 10,
    margin: 10,
    width: 10,
    borderColor: '#ffff',
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default Walkthrough3;
