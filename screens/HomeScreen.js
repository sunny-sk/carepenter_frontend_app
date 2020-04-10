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
// redux
import {getAllProducts} from '../store/action/productsAction';
import {useSelector, useDispatch} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const HomeScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const dispatch = useDispatch();

  const availableProducts = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    setProducts([...availableProducts.products]);
  }, [availableProducts]);

  //@desc load products
  const loadProducts = async (status) => {
    try {
      if (status.backgroundFetch) {
        console.log('background fetching');
        await dispatch(getAllProducts());
      } else {
        console.log('products Loading  first time');
        setIsLoading(true);
        await dispatch(getAllProducts());
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      if (error.message === 'Network Error') {
        setError('Something went Wrong');
      } else {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Screen was focused
      console.log('Home screen screen focused');
      // load products
      loadProducts({backgroundFetch: true});
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    loadProducts({backgroundFetch: false});
  }, []);

  //hiding splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const loadMore = () => {
    // console.log('load more clicked');
  };

  //setting status bar color
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
          {isLoading ? <ActivityIndicator size="small" color="#ffff" /> : null}
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
                      console.log('perticular product clicked');
                      props.navigation.navigate('detail', {data: product});
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
                            source={{
                              uri:
                                'https://res.cloudinary.com/smarty123/image/upload/v1585897914/' +
                                product.imgUrl,
                            }}>
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
                              {product.title}
                            </Text>
                          </ImageBackground>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              {/* <View style={styles.lastCard}>
                <TouchableOpacity
                  onPress={() => {
                    loadMore();
                  }}>
                  <Text style={{textAlign: 'center'}}>more click here</Text>
                </TouchableOpacity>
                <ActivityIndicator size="small" color={Colors.primary} />
              </View> */}
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
