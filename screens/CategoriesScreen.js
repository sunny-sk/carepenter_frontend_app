import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import CategoryTile from '../app/components/CategoryTile';

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
  useEffect(() => {
    setCategories([...availableCategories.categories]);
  }, [availableCategories]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Screen was focused
      console.log('Home screen screen focused');
      // load tasks
      loadCategory();
    });

    return unsubscribe;
  }, [loadCategory]);

  //@desc load task
  const loadCategory = async () => {
    console.log('category Loading');
    try {
      setIsLoading(true);
      await dispatch(getCategories());
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
          <View>
            <FlatList
              keyExtractor={(key) => key._id}
              data={categories}
              renderItem={renderGridItem}
              numColumns={2}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default CategoriesScreen;
