import React, {useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import {CATEGORIES} from '../data/dummy.category';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = props => {
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
          <ActivityIndicator size="small" color="#ffff" />
        </View>
      );
    },
  });

  const renderGridItem = item => {
    return (
      <>
        <CategoryTile
          title={item.item.name}
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
              data={CATEGORIES}
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
