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
  reserveBox: {
    position: 'absolute',
    width: widthPercentage(46),
    alignItems: 'center',
    justifyContent: 'center',
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

  const schedule = [
    [
      {
        // 월
        name: '이재만',
        startTime: '08:00',
        endTime: '09:00',
        session: '기타',
      },
      {
        name: '고병찬',
        startTime: '15:00',
        endTime: '15:30',
        session: '베이스',
      },
      {
        name: '홍길동',
        startTime: '16:30',
        endTime: '17:30',
        session: '베이스',
      },
    ],
    [
      {
        // 화
        name: '이재만',
        startTime: '10:30',
        endTime: '11:00',
        session: '보컬',
      },
    ],
    [], // 수
    [], // 목
    [], // 금
    [], // 토
    [], // 일
  ];
  function xPosGenerator(day: number): number {
    return widthPercentage(46 * day) + 14;
  }
  function yPosGenerator(time: string): number {
    return heightPercentage(
      parseInt(time.slice(0, 2), 10) * 46 +
        (parseInt(time.slice(3), 10) / 30) * 23 +
        20,
    );
  }

  function heightGenerator(start: string, end: string) {
    return Math.abs(parseInt(start.slice(3), 10) - parseInt(end.slice(3), 10))
      ? heightPercentage(23)
      : heightPercentage(46);
  }

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
