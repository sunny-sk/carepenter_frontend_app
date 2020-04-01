import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';

const CategoryTypeScreen = props => {
  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 63]);
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = () => {
    console.log('load more clicked');
  };

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Screen was focused
      setTitle(props.route.params.data.name);
      console.log('category type screen screen focused');
      // load tasks
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
