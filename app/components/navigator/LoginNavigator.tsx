import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';

const LoginStack = createStackNavigator();

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </LoginStack.Navigator>
  );
}

export default LoginNavigator;
