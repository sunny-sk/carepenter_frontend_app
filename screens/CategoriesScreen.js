import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CategoryTile from '../app/components/CategoryTile';
import Snackbar from 'react-native-snackbar';
import Colors from '../app/constants/Colors';
// redux
import {getCategories} from '../store/action/categoriesAction';
import {useSelector, useDispatch} from 'react-redux';

const CategoriesScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const availableCategories = useSelector((state) => {
    return state.categories;
  });
  const [error, setError] = useState(undefined);
  useEffect(() => {
    setCategories([...availableCategories.categories]);
  }, [availableCategories]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Screen was focused
      console.log('category screen screen focused');
      // load category
      loadCategory();
    });

    return unsubscribe;
  }, [loadCategory]);

  useEffect(() => {
    if (error) {
      console.log(error);
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: Colors.cancel,
        action: {
          text: 'try again',
          textColor: '#fff',
          onPress: () => {
            loadCategory();
          },
        },
      });
    }
  }, [error]);
  //@desc load task
  const loadCategory = async () => {
    console.log('category Loading');
    try {
      setIsLoading(true);
      await dispatch(getCategories());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.message === 'Network Error') {
        setError('Something went Wrong');
      } else {
        setError(error.message);
      }
    }
  };

  props.navigation.setOptions({
    headerLeft: () => {
      return (
        <TouchableOpacity
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
          style={{marginLeft: 10}}>
          <Entypo name="menu" size={35} color={'white'} />
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

  const renderGridItem = (item) => {
    return (
      <>
        <CategoryTile
          title={item.item.name}
          imgUrl={item.item.imgUrl}
          onSelect={() => {
            props.navigation.navigate('categoryType', {data: item.item});
          }}
        />
      </>
    );
  };
  return (
    <>
      <SafeAreaView>
        <View style={{height: '100%', backgroundColor: '#fff'}}>
          {isLoading ? (
            <View style={{alignItems: 'center', marginTop: '50%'}}>
              <View style={{width: '90%'}}>
                <Text style={{textAlign: 'center', fontSize: 15}}>
                  Please wait while we are fetching categories list....
                </Text>
              </View>
            </View>
          ) : null}
          {categories.length > 0 && !isLoading ? (
            <View>
              <FlatList
                keyExtractor={(key) => key._id}
                data={categories}
                renderItem={renderGridItem}
                numColumns={2}
              />
            </View>
          ) : null}
          {categories.length === 0 && !isLoading ? (
            <View style={{alignItems: 'center', marginTop: '50%'}}>
              <View style={{width: '80%'}}>
                <Text style={{textAlign: 'center'}}>No Categories Found</Text>
              </View>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </>
  );
};
export default CategoriesScreen;
