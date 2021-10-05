import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginNavigator} from './login.navigator';
import {HomeNavigator} from './home.navigator';
import {NoticeNavigator} from './notice.navigator';
import {ReservationNavigator} from './reservation.navigator';

const RootStackNavigator = createStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator headerMode="none">
        <RootStackNavigator.Screen
          name="LoginNavigator"
          component={LoginNavigator}
        />
        <RootStackNavigator.Screen
          name="HomeNavigator"
          component={HomeNavigator}
        />
        <RootStackNavigator.Screen
          name="NoticeNavigator"
          component={NoticeNavigator}
        />
        <RootStackNavigator.Screen
          name="ReservationNavigator"
          component={ReservationNavigator}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
}
