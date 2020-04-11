import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Colors from './../app/constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {getAllProductsByCategory} from '../store/action/commonActions';
import {useDispatch} from 'react-redux';

const CategoryTypeScreen = (props) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setCategory(props.route.params.data.name);

    loadCategoryProducts();
  }, [props.navigation]);

  const loadCategoryProducts = async () => {
    try {
      setIsLoading(true);
      const result = await dispatch(getAllProductsByCategory(category));
      setProducts([...result.products]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    console.log('load more clicked');
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Screen was focused
      setTitle(props.route.params.data.name);
      console.log('category type screen screen focused');
    });
    return unsubscribe;
  }, []);

  props.navigation.setOptions({
    title: title,
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
      <View style={styles.screen}>
        <View style={{marginTop: 20, backgroundColor: '#fff'}}>
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
});
