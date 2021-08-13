import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginNavigator from './LoginNavigator';
import HomeNavigator from './HomeNavigator';
import NoticeNavigator from './NoticeNavigator';
import ReservationNavigator from './ReservationNavigator';

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
        <MainStackNavigator.Screen
          name="NoticeNavigator"
          component={NoticeNavigator}
          options={{
            headerShown: false,
          }}
        />
        <MainStackNavigator.Screen
          name="ReservationNavigator"
          component={ReservationNavigator}
          options={{
            headerShown: false,
          }}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
