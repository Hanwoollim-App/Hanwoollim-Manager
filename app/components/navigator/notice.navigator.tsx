import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NoticeDetail, NoticeUpload} from '../screens';

const NoticeStack = createStackNavigator();

export function NoticeNavigator() {
  return (
    <NoticeStack.Navigator>
      <NoticeStack.Screen name="NoticeDetail" component={NoticeDetail} />
      <NoticeStack.Screen name="NoticeUpload" component={NoticeUpload} />
    </NoticeStack.Navigator>
  );
}
