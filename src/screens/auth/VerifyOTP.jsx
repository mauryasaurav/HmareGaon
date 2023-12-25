import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import {verifyAuthOTP} from '../../redux/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLocalData} from '../../utils/helpers';
import {OtpInput} from 'react-native-otp-entry';

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

  console.log('user', user);
  if (!!user) {
    navigation.navigate('Home');
  }

  const handleResendOTP = () => {};

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            textAlign: 'center',
          }}>
          Enter Verification Code
        </Text>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 18,
            color: '#333',
            margin: 30,
            textAlign: 'center',
          }}>
          We are automatically detecting a SMS send to your mobile number
          ********8080
        </Text>
        <OtpInput
          onTextChange={text => console.log(text)}
          onFilled={text => console.log(`OTP is ${text}`)}
          numberOfDigits={4}
          focusColor="blue"
          focusStickBlinkingDuration={500}
        />
        <CustomButton label={'Verify OTP'} onPress={() => handleVerifyOTP()} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Don't recieve the OTP ? </Text>
          <TouchableOpacity onPress={() => handleResendOTP()}>
            <Text
              style={{
                color: '#AD40AF',
                fontWeight: '700',
                textAlign: 'center',
              }}>
              {' '}
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTP;
