import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import HeaderScreen from './HeaderScreen';
import {useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderScreen navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
