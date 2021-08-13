import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoticeDetail from '../screens/notice/NoticeDetail';
import NoticeUpload from '../screens/notice/NoticeUpload';

const NoticeStack = createStackNavigator();

function NoticeNavigator() {
  return (
    <NoticeStack.Navigator>
      <NoticeStack.Screen
        name="NoticeDetail"
        component={NoticeDetail}
        options={{
          headerShown: false,
        }}
      />
      <NoticeStack.Screen
        name="NoticeUpload"
        component={NoticeUpload}
        options={{
          headerShown: false,
        }}
      />
    </NoticeStack.Navigator>
  );
}

export default NoticeNavigator;
