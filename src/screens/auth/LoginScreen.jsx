import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import { loginUser } from '../../redux/actions/auth';
import { Formik } from 'formik';
import useToastHook from '../../components/Toast';
import PrimaryInput from '../../components/PrimaryInput';
import { getLocalData } from '../../utils/helpers';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const toast = useToastHook();
  const { loading, error, user, loginData } = useSelector(state => state.auth);

  const handleLogin = ({ phoneNumber }) => {
    const credentials = {
      phoneNumber,
      lat: 28.4343,
      long: 3144,
      deviceToken: '2424e242r',
    };
    dispatch(loginUser(credentials));
  };

  if (!!loginData?.accessToken) {
    navigation.navigate('VerifyOTP');
  }

  if (!!error) {
    toast('Login', error);
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 20 }}>
        <ScrollView style={{ paddingHorizontal: 25 }}>
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

          <Formik
            initialValues={{ phoneNumber: '' }}
            onSubmit={values => handleLogin(values)}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <PrimaryInput
                  placeholder={'Phone Number'}
                  name="phoneNumber"
                  keyboardType="phone-pad"
                  onChangeText={handleChange('phoneNumber')}
                  value={values.phoneNumber}
                  onBlur={handleBlur('phoneNumber')}
                  icon={
                    <MaterialIcons
                      name="phone"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                />
                <CustomButton
                  label={'Send OTP'}
                  loading={loading}
                  disabled={values.phoneNumber.length == 10 ? false : true}
                  onPress={() => handleSubmit()}
                />
              </View>
            )}
          </Formik>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>New to the app? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: '#AD40AF', fontWeight: '700' }}>
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
