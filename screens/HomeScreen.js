import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  BackHandler,
  StyleSheet,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import Colors from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = props => {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 63]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = () => {
    console.log('load more clicked');
  };

  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.primary);
  });

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to Exit ?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
          style={{marginLeft: 10}}>
          <Entypo name="menu" size={35} color={'#ffff'} />
        </TouchableOpacity>
      );
    },
    headerRight: () => {
      return (
        <View style={{marginRight: 15}}>
          <ActivityIndicator size="small" color="#ffff" />
        </View>
      );
    },
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <View style={styles.screen}>
        {isLoading ? (
          <View style={styles.noDataContainer}>
            <Image
              style={styles.noDataContainerImage}
              source={require('../assets/images/home_screen_loading.png')}
            />
          </View>
        ) : (
          <View style={{marginTop: 20}}>
            <ScrollView>
              {products.map((product, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      props.navigation.navigate('detail');
                    }}>
                    <View style={styles.card}></View>
                  </TouchableOpacity>
                );
              })}
              <View style={styles.lastCard}>
                <TouchableOpacity
                  onPress={() => {
                    loadMore();
                  }}>
                  <Text style={{textAlign: 'center'}}>more click here</Text>
                </TouchableOpacity>
                <ActivityIndicator size="small" color={Colors.primary} />
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    height: '100%',
  },
  card: {
    height: 150,
    marginBottom: 10,
    width: '96%',
    marginLeft: '2%',
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
  },
  lastCard: {
    marginTop: 20,
    marginBottom: '20%',
    height: 150,
    width: '96%',
    marginLeft: '2%',
    borderRadius: 10,
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  noDataContainerImage: {
    height: '30%',
    width: '100%',
  },
});
