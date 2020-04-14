import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import Colors from './../app/constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {getAllProductsByCategory} from '../store/action/commonActions';
import {useDispatch} from 'react-redux';

const CategoryTypeScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(props.route.params.data.name);

    console.log(props.route.params.data.name);
    loadCategoryProducts(props.route.params.data.name);
  }, [props.navigation]);

  const loadCategoryProducts = async (data) => {
    try {
      setIsLoading(true);
      const result = await dispatch(getAllProductsByCategory(data));
      setProducts([...result.products]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   const unsubscribe = props.navigation.addListener('focus', () => {
  //     // Screen was focused
  //     console.log('category type screen screen focused');

  //     loadCategoryProducts(category);
  //   });
  //   return unsubscribe;
  // }, []);

  props.navigation.setOptions({
    title: title,
    // headerRight: () => {
    //   return (
    //     <View style={{marginRight: 15}}>
    //       {isLoading ? <ActivityIndicator size="small" color="#ffff" /> : null}
    //     </View>
    //   );
    // },
  });

  return (
    <>
      <View style={styles.screen}>
        {isLoading ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{textAlign: 'center'}}>Please wait ...</Text>
            <ActivityIndicator size="small" color={Colors.primary} />
          </View>
        ) : (
          <View style={{marginTop: 10, backgroundColor: '#fff'}}>
            <ScrollView>
              {products.map((product, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      console.log('perticular category product clicked');
                      props.navigation.navigate('detail', {data: product});
                    }}>
                    <View style={styles.card}>
                      <View style={{height: '100%'}}>
                        <Image
                          style={{
                            width: '100%',
                            height: '90%',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                          }}
                          source={{
                            uri:
                              'https://res.cloudinary.com/smarty123/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1585897914/' +
                              product.imgUrl,
                          }}
                        />
                        <Text
                          style={{
                            backgroundColor: '#000000',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 16,
                            textAlign: 'center',
                            paddingHorizontal: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            paddingVertical: 1,
                          }}>
                          {product.title}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}

              <View style={styles.lastCard}>
                {/* <TouchableOpacity
                onPress={() => {
                  loadMore();
                }}>
                <Text style={{textAlign: 'center'}}>more click here</Text>
              </TouchableOpacity>
              <ActivityIndicator size="small" color={Colors.primary} /> */}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </>
  );
};
export default CategoryTypeScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    height: '100%',
  },
  card: {
    height: 200,
    marginBottom: 10,
    width: '98%',
    marginLeft: '1%',
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
});
