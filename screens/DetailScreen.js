import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
  Modal,
  Image,
  Text,
  Keyboard,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

//redux
import {getAllComments, doComment} from '../store/action/commonActions';
import {useDispatch} from 'react-redux';

import Comments from './../app/components/Comments';
import Colors from './../app/constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const DetailScreen = (props) => {
  const [isModalActive, setModalActive] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [productData, setProductData] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProductData({...props.route.params.data});
    loadComments(props.route.params.data._id);
  }, [props.navigation]);

  const loadComments = async (id) => {
    try {
      setIsLoading(true);
      const result = await dispatch(getAllComments(id));
      setIsLoading(false);
      setComments([...result.comments]);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onComment = async () => {
    try {
      if (newComment === '') {
        Alert.alert('Please add a comment');
        return;
      }
      setIsLoading(true);
      await dispatch(doComment(newComment, productData._id));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  //TODO add play store link
  const onShareDetails = () => {
    Linking.openURL(
      `whatsapp://send?text=Look at this awesome design \nwww.carpenter.in/roduct/design/124dhdk   // plaStore app link`,
    );
  };

  props.navigation.setOptions({
    headerRight: () => {
      return (
        //share details
        <View style={{marginRight: 10}}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              onShareDetails();
            }}
            style={{marginLeft: 10}}>
            <Entypo name="share" size={26} color={'white'} />
          </TouchableOpacity>
        </View>
      );
    },
  });

  return (
    <>
      {isModalActive ? (
        <Modal
          animationType="slide"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            setModalActive(false);
          }}>
          <View
            style={{
              backgroundColor: 'black',
              height: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: 200, width: '100%'}}
              source={{
                uri:
                  'https://res.cloudinary.com/smarty123/image/upload/v1585897914/' +
                  productData.imgUrl,
              }}
            />
          </View>
        </Modal>
      ) : null}
      <SafeAreaView>
        <View style={{backgroundColor: '#fff', height: '100%'}}>
          {/* image */}
          <View style={{}}>
            <ScrollView horizontal={true} style={{marginTop: 5}}>
              <TouchableOpacity
                onPress={() => {
                  setModalActive(true);
                }}>
                <View
                  style={{
                    height: 150,
                    width: windowWidth,
                    backgroundColor: '#f2f2f2',
                    borderRadius: 10,
                  }}>
                  {productData.imgUrl ? (
                    <Image
                      style={{
                        height: 150,
                        flex: 1,
                        width: '90%',
                        marginLeft: '5%',
                      }}
                      source={{
                        uri:
                          'https://res.cloudinary.com/smarty123/image/upload/v1585897914/' +
                          productData.imgUrl,
                      }}
                    />
                  ) : (
                    <ActivityIndicator
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignContent: 'center',
                      }}
                      size="small"
                      color="black"
                    />
                  )}
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* content */}
          <View style={styles.secondPart}>
            <Text style={styles.desHeading}>Description</Text>

            <View style={{marginTop: 2, width: '96%', marginLeft: '2%'}}>
              <Text style={styles.desText}>{productData.description}</Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text
                style={{fontWeight: 'bold', marginLeft: 3, marginBottom: 2}}>
                Details
              </Text>
              <View style={styles.detailRow}>
                <View style={styles.widthHalf}>
                  <Text>Height : {productData.height}</Text>
                </View>
                <View style={styles.widthHalf}>
                  <Text style={styles.detailTextRight}>Total Area : 100</Text>
                </View>
              </View>
              <View style={styles.detailRow}>
                <View style={styles.widthHalf}>
                  <Text>Width : {productData.width}</Text>
                </View>
                <View style={styles.widthHalf}>
                  <Text style={styles.detailTextRight}>Wood Type : 100</Text>
                </View>
              </View>
              <View style={styles.detailRow}>
                <View style={styles.widthHalf}>
                  <Text>Depth : {productData.depth}</Text>
                </View>
                <View style={styles.widthHalf}>
                  <Text style={styles.detailTextRight}>
                    Location : {productData.location}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.divider}></View>
            {/* comments */}
            <Comments comments={comments} />
          </View>
        </View>
        {/* do Comment section */}
        <View style={styles.commentContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
              <TextInput
                value={newComment}
                onChangeText={(text) => setNewComment(text)}
                placeholder="type comment"
              />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {isLoading ? (
                <ActivityIndicator size="small" color="black" />
              ) : (
                <TouchableOpacity onPress={onComment}>
                  <Ionicons name="md-send" color={Colors.primary} size={24} />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {/* <Text style={{textAlign: 'center'}}>login to comment</Text> */}
        </View>
      </SafeAreaView>
    </>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  secondPart: {
    width: '96%',
    height: '80%',
    marginLeft: '2%',
  },
  desHeading: {
    fontWeight: 'bold',
    marginTop: 2,
    marginLeft: 3,
  },
  desText: {
    color: '#aaaaaa',
    marginTop: 1,
    fontSize: 13,
    textAlign: 'justify',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginLeft: '10%',
    marginVertical: 3,
  },
  widthHalf: {
    width: '50%',
  },
  detailTextRight: {
    marginLeft: '10%',
  },
  divider: {
    borderTopWidth: 1,
    borderColor: '#c6c6c6',
    marginVertical: 5,
  },
  commentContainer: {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    width: '100%',
    bottom: 0,
  },
});
