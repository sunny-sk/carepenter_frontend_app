import React from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native';
const Comments = (props) => {
  return (
    <>
      <ScrollView>
        {props.comments.map((comment, index) => {
          return (
            <View
              style={{
                height: 60,
                marginBottom: index === props.comments.length - 1 ? '30%' : 0,
              }}
              key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 15,
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}>
                  {comment.user.imgUrl ? (
                    <Image
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 100,
                      }}
                      source={
                        comment.user.imgUrl
                          ? {
                              uri:
                                'https://res.cloudinary.com/smarty123/image/upload/v1585897914/' +
                                comment.user.imgUrl,
                            }
                          : require('../../assets/images/no_user_profile1.jpg')
                      }
                    />
                  ) : (
                    <Image
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 100,
                      }}
                      source={require('../../assets/images/no_user_profile1.jpg')}
                    />
                  )}
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    width: '70%',
                  }}>
                  <Text style={{fontSize: 12, color: '#c6c6c6'}}>
                    {comment.user.name}
                  </Text>
                  <Text>{comment.comment}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Comments;
