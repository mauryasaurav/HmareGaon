import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const HeaderScreen = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.auth);
  return (
    <ScrollView style={{padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
          {user?.fullName || ''}
        </Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ImageBackground
            source={require('../../assets/images/user-profile.jpg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          borderColor: '#C6C6C6',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          paddingVertical: 8,
        }}>
        <Feather
          name="search"
          size={20}
          color="#C6C6C6"
          style={{marginRight: 5}}
        />
        <TextInput placeholder="Search" />
      </View>
    </ScrollView>
  );
};

export default HeaderScreen;
