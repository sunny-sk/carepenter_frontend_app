import React from 'react';
import {SafeAreaView} from 'react-native';

//screens
import Walkthrough1 from '../components/Walkthrough1';
import Walkthrough2 from '../components/Walkthrough2';
import Walkthrough3 from '../components/Walkthrough3';

const Welcome = (props) => {
  return (
    <>
      <SafeAreaView>
        <Walkthrough1 />
        <Walkthrough2 />
        <Walkthrough3 />
      </SafeAreaView>
    </>
  );
};
export default Welcome;
