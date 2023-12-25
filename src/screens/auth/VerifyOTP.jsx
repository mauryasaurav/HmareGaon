import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import {verifyAuthOTP} from '../../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocalData } from '../../utils/helpers';


const VerifyOTP = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error, loginToken, user} = useSelector(state => state.auth);
  const handleVerifyOTP = async () => {
    const credentials = {
      otp: '1234',
      accessToken: loginToken,
    };
    dispatch(verifyAuthOTP(credentials));
  };

  console.log("user", user)
  if (!!user) {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Verify OTP
        </Text>

        <InputField
          label={'Phone Number'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="number"
        />
        <CustomButton label={'Send OTP'} onPress={() => handleVerifyOTP()} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Want to login another other account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTP;
