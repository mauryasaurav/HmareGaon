/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AuthStack from './src/navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
};

export default App;
