import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReservationTimeTable from '../screens/reservation/timeTable';
import BandReservationProcess from '../screens/reservation/process';
import MentoringReservationProcess from '../screens/reservation/process/mentoringReservationProcess';
import ReservationContext, {
  ReservationInfo,
} from '../../utils/context/ReservationContext';

const ReservationStack = createStackNavigator();

function ReservationNavigator() {
  return (
    <ReservationContext.Provider value={new ReservationInfo()}>
      <ReservationStack.Navigator initialRouteName="ReservationTimeTable">
        <ReservationStack.Screen
          name="ReservationTimeTable"
          component={ReservationTimeTable}
          options={{
            headerShown: false,
          }}
        />
        <ReservationStack.Screen
          name="BandReservationProcess"
          component={BandReservationProcess}
          options={{
            headerShown: false,
          }}
        />
        <ReservationStack.Screen
          name="MentoringReservationProcess"
          component={MentoringReservationProcess}
          options={{
            headerShown: false,
          }}
        />
      </ReservationStack.Navigator>
    </ReservationContext.Provider>
  );
}

export default ReservationNavigator;
