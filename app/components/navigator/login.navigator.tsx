import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, SignIn} from '../screens';

const LoginStack = createStackNavigator();

export function LoginNavigator() {
  return (
    <LoginStack.Navigator headerMode="none">
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator>
  );
}
