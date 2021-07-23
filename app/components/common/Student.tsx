import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/constant/common/design/Responsive';
import {StudentInterface} from '../../utils/constant/common/customType';

const styles = StyleSheet.create({
  item: {
    width: widthPercentage(307),
    height: heightPercentage(50),
    marginTop: 5,
    marginHorizontal: 14,
  },
  name: {
    width: widthPercentage(44),
    height: heightPercentage(24),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
  },
  major: {
    width: widthPercentage(55),
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    color: '#808080',
  },
  studentCode: {
    width: widthPercentage(67),
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    marginLeft: widthPercentage(185),
    color: '#808080',
  },
  itemSection: {
    flexDirection: 'row',
  },
});

function Student({name, major, studentCode}: StudentInterface) {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.itemSection}>
        <Text style={styles.major}>{major}</Text>
        <Text style={styles.studentCode}>{studentCode}</Text>
      </View>
    </View>
  );
}

export default memo(Student);
