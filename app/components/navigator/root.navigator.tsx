import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginNavigator} from './login.navigator';
import {HomeNavigator} from './home.navigator';
import {NoticeNavigator} from './notice.navigator';
import {ReservationNavigator} from './reservation.navigator';
import BandReservationProcess from '../screens/reservation/process';
import MentoringReservationProcess from '../screens/reservation/process/mentoringReservationProcess';

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
        <RootStackNavigator.Screen
          name="BandReservationProcess"
          component={BandReservationProcess}
        />
        <RootStackNavigator.Screen
          name="MentoringReservationProcess"
          component={MentoringReservationProcess}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
}
