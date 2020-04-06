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
} from 'react-native';

import Comments from '../components/Comments';
import Colors from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const DetailScreen = (props) => {
  const [isModalActive, setModalActive] = useState(false);
  const [url, setUrl] = useState(undefined);
  const [comments, setComments] = useState([1, 2, 3, 4, 5, 6, 6, 77, 7]);
  props.navigation.setOptions({
    headerRight: () => {
      return (
        <View style={{marginRight: 10}}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
            }}
            style={{marginLeft: 10}}>
            <Entypo name="share" size={26} color={'white'} />
          </TouchableOpacity>
        </View>
      );
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setUrl(
        'https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
      );
    }, 2000);
  }, []);

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
              source={require('../assets/images/1.jpg')}
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
                  {url ? (
                    <Image
                      style={{
                        height: 150,
                        flex: 1,
                        width: '90%',
                        marginLeft: '5%',
                      }}
                      source={{
                        uri: url,
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
              <View
                style={{
                  height: 150,
                  width: windowWidth,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                }}>
                <Image
                  style={{height: 150, flex: 1, width: '90%', marginLeft: '5%'}}
                  source={require('../assets/images/2.jpg')}
                />
              </View>
              <View
                style={{
                  height: 150,
                  width: windowWidth,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                }}>
                <Image
                  style={{height: 150, flex: 1, width: '90%', marginLeft: '5%'}}
                  source={require('../assets/images/2.jpg')}
                />
              </View>
            </ScrollView>
          </View>
          {/* content */}
          <View style={styles.secondPart}>
            <Text style={styles.desHeading}>Description</Text>

            <View style={{marginTop: 2, width: '96%', marginLeft: '2%'}}>
              <Text style={styles.desText}>
                flush door made of wood type sirsa lorem ipsum tetxt hai ye
                flush door made of wood type sirsa lorem ipsum tetxt hai ye
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text
                style={{fontWeight: 'bold', marginLeft: 3, marginBottom: 2}}>
                Details
              </Text>
              <View style={styles.detailRow}>
                <View style={styles.widthHalf}>
                  <Text>Height : 200</Text>
                </View>
                <View style={styles.widthHalf}>
                  <Text style={styles.detailTextRight}>Total Area : 100</Text>
                </View>
              </View>
              <View style={styles.detailRow}>
                <View style={styles.widthHalf}>
                  <Text>Width : 200</Text>
                </View>
                <View style={styles.widthHalf}>
                  <Text style={styles.detailTextRight}>Wood Type : 100</Text>
                </View>
              </View>
              <View style={styles.detailRow}>
                <View style={styles.widthHalf}>
                  <Text>Depth : 200</Text>
                </View>
                <View style={styles.widthHalf}>
                  <Text style={styles.detailTextRight}>Location : 100</Text>
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
              <TextInput placeholder="type comment" />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size="small" color="black" />
              {/* <Ionicons name="md-send" color={Colors.primary} size={24} /> */}
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
