import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import { Formik, Field } from 'formik';
import GenderRadioButtons from '../../components/RadioButton';
import PrimaryInput from '../../components/PrimaryInput';
import { registerSchema } from '../../utils/validations';
import { registerUser } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import useToastHook from '../../components/Toast';

const RegisterScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState(
    new Date('2002-09-029T00:00:00.000Z').toDateString(),
  );
  const dispatch = useDispatch();
  const toast = useToastHook();
  const { loading, error, loginData } = useSelector(state => state.auth);

  const handleSignup = values => {
    const credentials = {
      ...values,
      dob: date,
      deviceType: Platform.OS,
      countryCode: '+91',
      lat: 28.4343,
      long: 3144,
      deviceToken: '2424e242r',
    };
    dispatch(registerUser(credentials));
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
              fontSize: 28,
              fontWeight: '500',
              color: '#333',
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Create an account
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '500',
              color: '#333',
              marginBottom: 30,
            }}>
            Welcome! Please enter your details
          </Text>
          <Formik
            initialValues={{
              phoneNumber: '',
              fullName: '',
              email: '',
              gender: 'male',
            }}
            validationSchema={registerSchema}
            onSubmit={values => handleSignup(values)}>
            {({
              handleChange,
              handleBlur,
              setFieldValue,
              handleSubmit,
              values,
              isValid,
            }) => (
              <View>
                <PrimaryInput
                  placeholder={'Full Name'}
                  name="fullName"
                  keyboardType="default"
                  onChangeText={handleChange('fullName')}
                  value={values.fullName}
                  onBlur={handleBlur('fullName')}
                  icon={
                    <MaterialIcons
                      name="phone"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                />
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
                <PrimaryInput
                  placeholder={'Email'}
                  name="email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  value={values.email}
                  onBlur={handleBlur('email')}
                  icon={
                    <MaterialIcons
                      name="email"
                      size={20}
                      color="#666"
                      style={{ marginRight: 5 }}
                    />
                  }
                />
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 30,
                  }}>
                  <Ionicons
                    name="calendar-outline"
                    size={20}
                    color="#666"
                    style={{ marginRight: 5 }}
                  />
                  <TouchableOpacity onPress={() => setOpen(true)}>
                    <Text style={{ color: '#666', marginLeft: 5, marginTop: 5 }}>
                      {dobLabel}
                    </Text>
                  </TouchableOpacity>
                </View>

                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode={'date'}
                  maximumDate={new Date('2018-01-01')}
                  minimumDate={new Date('1980-01-01')}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setDobLabel(date.toDateString());
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />

                <Field
                  name="gender"
                  component={GenderRadioButtons}
                  setFieldValue={setFieldValue}
                  values={values}
                />

                <CustomButton
                  label={'Register'}
                  onPress={() => handleSubmit()}
                  loading={loading}
                  disabled={!isValid}
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
            <Text>Already registered?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: '#AD40AF', fontWeight: '700' }}> Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
