import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';
import { loginUser } from '../../redux/actions/auth';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error, loginToken } = useSelector((state) => state.auth);
  const handleLogin = () => {
    const credentials = {
      phoneNumber: '9708070137',
      lat: 28.4343,
      long: 3144,
      deviceToken: '2424e242r',
    };
    dispatch(loginUser(credentials));
  };

  if(!!loginToken) {
    navigation.navigate('VerifyOTP')
  }
  
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Phone Number'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="number"
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
            <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
