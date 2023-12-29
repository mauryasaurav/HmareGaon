/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo} from 'react';
import AuthStack from './src/navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {getLocalData} from './src/utils/helpers';
import AppStack from './src/navigation/AppStack';
import Toast from 'react-native-toast-message';

const App = () => {
  const userLoggedin = useMemo(async () => {
    const isLoggedIn = await getLocalData('userToken');
    console.log('isLoggedIn', isLoggedIn);
  }, []);

  if(!!userLoggedin) {
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
