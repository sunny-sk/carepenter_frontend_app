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

const Walthrough1 = (props) => {
  const moveToNext = () => {
    console.log('clickd');
    props.navigation.navigate('Walkthrough2');
  };
  return (
    <SafeAreaView>
      <View style={{backgroundColor: Colors.primary, height: '100%'}}>
        <View
          style={{
            alignItems: 'center',
            height: '40%',
            justifyContent: 'flex-end',
          }}>
          <Image
            source={require('./../../assets/images/walkthrough1_fill.png')}
            style={{height: 150, width: 150}}
          />
        </View>
        <View style={{height: '60%'}}>
          <View style={{width: '80%', marginLeft: '10%'}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 18,
                marginTop: 20,
                color: '#fff',
              }}>
              Furniture
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: '#c6c6c6',
              }}>
              looking for best furniture service in your town dont’t worry we
              are here looking for best furniture service in your town dont’t
              worry we are here
            </Text>
          </View>

          <View style={styles.circleContainer}>
            <Circle
              style={{
                ...styles.circleStyle,
                borderColor: '#fff',
                backgroundColor: '#fff',
              }}
            />
            <Circle style={styles.circleStyle} />
            <Circle style={styles.circleStyle} />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={moveToNext}>
              <Text
                style={{
                  textAlign: 'right',
                  marginRight: '10%',
                  backgroundColor: Colors.primary,
                  borderRadius: 6,
                  color: '#fff',
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
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
export default Walthrough1;
