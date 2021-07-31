import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
// import {
//   heightPercentage,
//   widthPercentage,
//   fontPercentage,
// } from '../../../utils/constant/common/design/Responsive';
import CustomHeader from '../../common/CustomHeader';
import HEADER_TITLE from '../../../utils/constant/naviagation';
import CustomStatusBar from '../../common/CustomStatusBar';
import TimeTable from './timeTable';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  body: {
    alignItems: 'center',
  },
});

function Reservation() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Reservation}
          headerLeft
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />
        <View style={styles.body}>
          <ScrollView>
            <Text>버튼 있는 자리</Text>
            <TimeTable />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default Reservation;
