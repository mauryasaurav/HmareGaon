import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import {resendOTP, verifyAuthOTP} from '../../redux/actions/auth';
import {OtpInput} from 'react-native-otp-entry';
import useToastHook from '../../components/Toast';
import {maskSensitiveInfo} from '../../utils/helpers';

const VerifyOTP = ({navigation}) => {
  const toast = useToastHook();
  const dispatch = useDispatch();
  const [isResendActive, setResendActive] = useState(false);
  const [countdown, setCountdown] = useState(90);
  const [otp, setOtp] = useState('');
  const {loading, error, loginData, user} = useSelector(state => state.auth);

  useEffect(() => {
    let timer;

    if (countdown > 0 && !isResendActive) {
      timer = setTimeout(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    } else {
      setResendActive(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [countdown, isResendActive]);

  const handleVerifyOTP = async () => {
    dispatch(
      verifyAuthOTP({
        otp: otp,
        accessToken: loginData?.accessToken,
      }),
    );
  };

  if (!!error) {
    toast('Verify OTP', error);
  }

  if (!!user) {
    navigation.navigate('Home');
  }

  const handleResendOTP = () => {
    dispatch(
      resendOTP({
        accessToken: loginData?.accessToken,
      }),
    );
    toast('Resend OTP', "Resend OTP send successfully!", "success");
    setCountdown(90);
    setOtp("")
    setResendActive(false);
  };

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
            {maskSensitiveInfo(loginData?.phoneNumber)}
          </Text>
          <OtpInput
            onTextChange={text => setOtp(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
            numberOfDigits={4}
            focusColor="blue"
            focusStickBlinkingDuration={500}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 18,
              color: '#333',
              marginTop: 10,
              textAlign: 'center',
            }}>
            {!isResendActive && `Resend in ${countdown}s`}
          </Text>

          <View style={{marginTop: 25}}>
            {isResendActive ? (
              <CustomButton
                label={'Resend OTP'}
                onPress={() => handleResendOTP()}
              />
            ) : (
              <CustomButton
                label={'Verify OTP'}
                onPress={() => handleVerifyOTP()}
                loading={loading}
                disabled={otp.length == 4 ? false : true}
              />
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
            }}>
            <Text>Want to go back to login? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text
                style={{
                  color: '#AD40AF',
                  fontWeight: '700',
                  textAlign: 'center',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default VerifyOTP;
