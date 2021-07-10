import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';

const MainStackNavigator = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator>
        <MainStackNavigator.Screen
          name="LoginNavigator"
          component={LoginNavigator}
          options={{
            headerShown: false,
          }}
        />
        <MainStackNavigator.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            headerShown: false,
          }}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;