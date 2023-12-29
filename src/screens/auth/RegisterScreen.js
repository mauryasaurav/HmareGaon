import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import InputField from '../../components/InputField';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 20}}>
        <ScrollView style={{paddingHorizontal: 25}}>
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
          <InputField
            label={'Full Name'}
            icon={
              <Ionicons
                name="person-outline"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
          />

          <InputField
            label={'Phone Number'}
            icon={
              <MaterialIcons
                name="phone"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            keyboardType="number-pad"
          />
          <InputField
            label={'Email ID'}
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            keyboardType="email-address"
          />

          <InputField
            label={'Password'}
            icon={
              <MaterialIcons
                name="password"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            inputType="password"
          />

          <InputField
            label={'Confirm Password'}
            icon={
              <MaterialIcons
                name="password"
                size={20}
                color="#666"
                style={{marginRight: 5}}
              />
            }
            inputType="password"
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
              style={{marginRight: 5}}
            />
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text style={{color: '#666', marginLeft: 5, marginTop: 5}}>
                {dobLabel}
              </Text>
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            open={open}
            date={date}
            mode={'date'}
            maximumDate={new Date('2005-01-01')}
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

          <CustomButton label={'Register'} onPress={() => {}} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>Already registered?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
