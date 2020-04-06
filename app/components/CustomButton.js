import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';

const CustomButton = props => {
  return (
    <View
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        borderColor: props.style.backgroundColor,
        width: '100%',
      }}>
      {Platform.OS === 'ios' ? (
        <TouchableOpacity onPress={props.click} borderRadius={10}>
          <View
            style={{
              ...styles.button,
              backgroundColor: props.style.backgroundColor
                ? props.style.backgroundColor
                : '#131200',
            }}>
            <Text style={{color: props.style.color, textAlign: 'center'}}>
              {props.children}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableNativeFeedback
          onPress={props.click}
          background={TouchableNativeFeedback.Ripple('#dddddd', false)}
          borderRadius={10}>
          <View
            style={{
              ...styles.button,
              backgroundColor: props.style.backgroundColor
                ? props.style.backgroundColor
                : '#131200',
            }}>
            <Text style={{color: props.style.color, textAlign: 'center'}}>
              {props.children}
            </Text>
          </View>
        </TouchableNativeFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});

export default CustomButton;
