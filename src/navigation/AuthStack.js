import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import VerifyOTP from '../screens/auth/VerifyOTP';
import HomeScreen from '../screens/home/HomeScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthentication } from '../redux/actions/auth';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [])

  console.log("user", user)
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? "Login" : "Home"}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
