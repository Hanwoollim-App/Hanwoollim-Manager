import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Approval, Home, Member, Notice, ReservationTimeTable} from '../screens';

const HomeStack = createStackNavigator();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Member" component={Member} />
      <HomeStack.Screen name="Notice" component={Notice} />
      <HomeStack.Screen name="Reservation" component={ReservationTimeTable} />
      <HomeStack.Screen name="Approval" component={Approval} />
    </HomeStack.Navigator>
  );
}
