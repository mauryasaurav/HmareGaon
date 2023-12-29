import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import {loginUser} from '../../redux/actions/auth';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, error, loginToken} = useSelector(state => state.auth);
  const handleLogin = () => {
    const credentials = {
      phoneNumber: '9708070137',
      lat: 28.4343,
      long: 3144,
      deviceToken: '2424e242r',
    };
    dispatch(loginUser(credentials));
  };

  if (!!loginToken) {
    navigation.navigate('VerifyOTP');
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 20}}>
        <ScrollView style={{paddingHorizontal: 25}}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 24,
              fontWeight: '500',
              color: '#333',
              textAlign: 'center',
            }}>
            Login to your account
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              color: '#333',
              margin: 20,
              marginBottom: 60,
              textAlign: 'center',
            }}>
            We will send you a Confirmation Code
          </Text>

          <InputField
            label={'Phone Number'}
            icon={
              <MaterialIcons
                name="phone"
                size={20}
                color="#666"
                style={{marginRight: 10}}
              />
            }
            keyboardType="number-pad"
          />
          <CustomButton label={'Send OTP'} onPress={() => handleLogin()} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>New to the app?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}>
                {' '}
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
