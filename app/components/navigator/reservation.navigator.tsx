import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ReservationBandProcess,
  ReservationTimeTable,
  ReservationMentoringProcess,
} from '../screens';

const ReservationStack = createStackNavigator();

export function ReservationNavigator() {
  return (
    <ReservationStack.Navigator
      headerMode="none"
      initialRouteName="ReservationTimeTable">
      <ReservationStack.Screen
        name="ReservationTimeTable"
        component={ReservationTimeTable}
      />
      <ReservationStack.Screen
        name="ReservationBandProcess"
        component={ReservationBandProcess}
      />
      <ReservationStack.Screen
        name="ReservationMentoringProcess"
        component={ReservationMentoringProcess}
      />
    </ReservationStack.Navigator>
  );
}
