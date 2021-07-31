import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
  fontPercentage,
} from '../../../utils/constant/common/design/Responsive';
import color from '../../../utils/constant/common/design/Color';

const styles = StyleSheet.create({
  timeTable: {
    width: widthPercentage(336),
    marginBottom: heightPercentage(100),
  },
  dayColumns: {
    height: heightPercentage(20),
    flexDirection: 'row',
  },
  cornerBox: {
    width: widthPercentage(14),
    borderWidth: 1,
    borderColor: '#cdcdcd',
    backgroundColor: color.mainColor,
  },
  day: {
    width: widthPercentage(46),
    alignItems: 'center',
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: '#cdcdcd',
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
    borderColor: '#cdcdcd',
  },
  timeText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(10),
    includeFontPadding: false,
  },
  blankBox: {
    width: widthPercentage(46),
    height: heightPercentage(46),
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cdcdcd',
  },
});

function TimeTable() {
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
          {week.map((index) => (
            <View key={index} style={styles.blankBox} />
          ))}
        </View>
      ))}
    </View>
  );
}

export default TimeTable;
