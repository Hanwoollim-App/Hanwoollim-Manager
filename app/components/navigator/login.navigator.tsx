import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import SignIn from '../screens/signIn';

const LoginStack = createStackNavigator();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator>
  );
}

export default LoginNavigator;
