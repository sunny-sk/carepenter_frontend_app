import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Colors from './../app/constants/Colors';
import SplashScreen from 'react-native-splash-screen';
import Entypo from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const HomeScreen = (props) => {
  const [products, setProducts] = useState([1]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const loadMore = () => {
    console.log('load more clicked');
  };

  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.primary);
  });

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to Exit ?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => backHandler.remove();
  // }, []);

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
                    <View style={styles.card}>
                      <View style={{height: '100%'}}>
                        <View style={{height: '100%'}}>
                          <ImageBackground
                            style={{
                              width: '100%',
                              height: '100%',
                              justifyContent: 'flex-end',
                            }}
                            source={require('../assets/images/1.jpg')}>
                            <Text
                              style={{
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: 22,
                                textAlign: 'center',
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                              }}>
                              {'title'}
                            </Text>
                          </ImageBackground>
                        </View>
                      </View>
                    </View>
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
    height: 200,
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
    height: windowWidth / 2,
    width: windowWidth,
  },
});
