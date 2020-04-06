import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../constants/Colors';

const CategoryTile = (props) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <>
      <View style={styles.gridItem}>
        <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
          <View style={styles.grid}>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
              }}
              source={{
                uri: props.imgUrl,
              }}>
              <Text
                numberOfLines={2}
                style={{
                  ...styles.title,
                  color: '#ffff',
                  backgroundColor: 'rgba(0,0,0,0.5)',

                  padding: 10,
                }}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
        </TouchableCmp>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  grid: {
    backgroundColor: '#c6c6c6',
    flex: 1,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CategoryTile;
