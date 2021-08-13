import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Member from '../screens/member';
import Notice from '../screens/notice';
import Reservation from '../screens/reservation/timeTable';

const HomeStack = createStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Member"
        component={Member}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Notice"
        component={Notice}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Reservation"
        component={Reservation}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
