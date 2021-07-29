import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {
  heightPercentage,
  widthPercentage,
  fontPercentage,
} from '../../../utils/constant/common/design/Responsive';
import CustomHeader from '../../common/CustomHeader';
import color from '../../../utils/constant/common/design/Color';
import HEADER_TITLE from '../../../utils/constant/naviagation';
import CustomStatusBar from '../../common/CustomStatusBar';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  timeTable: {
    width: widthPercentage(336),
    marginBottom: heightPercentage(30),
  },
  dayColumns: {
    height: heightPercentage(20),
    flexDirection: 'row',
  },
  cornerBox: {
    width: widthPercentage(14),
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: color.mainColor,
  },
  day: {
    width: widthPercentage(46),
    alignItems: 'center',
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: color.mainColor,
  },
  dayText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(10),
    includeFontPadding: false,
    color: 'white',
  },
  timeIndex: {
    flexDirection: 'row',
  },
  time: {
    width: widthPercentage(14),
    height: heightPercentage(46),
    alignItems: 'flex-end',
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: 'gray',
  },
  timeText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(10),
    includeFontPadding: false,
  },
});

function Reservation() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );

  const generateTimes = (startTime: number, endTime: number) => {
    const times = [];

    for (let i = startTime; i < endTime; i += 1) {
      times.push(i);
    }
    return times;
  };

  const times = generateTimes(0, 24);
  const week = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];

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
        <ScrollView>
          <View style={styles.timeTable}>
            <View style={styles.dayColumns}>
              <View style={styles.cornerBox} />
              {week.map((day) => (
                <View key={day} style={styles.day}>
                  <Text style={styles.dayText}>{day}</Text>
                </View>
              ))}
            </View>
            {times.map((time) => (
              <View key={time} style={styles.timeIndex}>
                <View style={styles.time}>
                  <Text style={styles.timeText}>{time}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Reservation;
