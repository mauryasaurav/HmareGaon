import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
