import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Member from '../screens/member';
import Notice from '../screens/notice';
import Approval from '../screens/approval';
import Reservation from '../screens/reservation/timeTable';

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Member" component={Member} />
      <HomeStack.Screen name="Notice" component={Notice} />
      <HomeStack.Screen name="Reservation" component={Reservation} />
      <HomeStack.Screen name="Approval" component={Approval} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
