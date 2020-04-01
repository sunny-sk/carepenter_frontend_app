import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../constants/Colors';

const CategoryTile = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <>
      <View style={styles.gridItem}>
        <TouchableCmp style={{flex: 1}} onPress={props.onSelect}>
          <View style={styles.grid}>
            <Text numberOfLines={2} style={styles.title}>
              {props.title}
            </Text>
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
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default CategoryTile;
