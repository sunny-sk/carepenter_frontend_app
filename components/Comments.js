import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
  Modal,
  Image,
  Animated,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Comments = props => {
  return (
    <>
      <ScrollView>
        {props.comments.map((comment, index) => {
          return (
            <View
              style={{
                height: 60,
                marginBottom: index === props.comments.length - 1 ? '30%' : 0,
              }}
              key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 100,
                    }}
                    source={require('../assets/images/no_user_profile.png')}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    width: '70%',
                  }}>
                  <Text style={{fontSize: 12, color: '#c6c6c6'}}>username</Text>
                  <Text>this my first comment</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Comments;
