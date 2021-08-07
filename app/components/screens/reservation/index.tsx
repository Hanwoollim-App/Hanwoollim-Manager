import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Text, StyleSheet, ScrollView} from 'react-native';
import ScreenWrapper from '../../../components/common/ScreenWrapper';

import TimeTable from './timeTable';

function Reservation() {
  return (
    <ScreenWrapper headerTitle="예약하기">
      <Text>버튼 있는 자리</Text>
      <ScrollView>
        <TimeTable />
      </ScrollView>
    </ScreenWrapper>
  );
}

export default Reservation;
