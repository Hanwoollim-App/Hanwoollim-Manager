import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../screens';
import SignIn from '../screens/sign-in';

const LoginStack = createStackNavigator();

export function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator>
  );
}
