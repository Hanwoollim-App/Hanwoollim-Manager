import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/constant/common/design/Responsive';
import {NoticeItemInterface} from '../../utils/constant/common/customType';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  list: {
    width: widthPercentage(335),
    height: heightPercentage(618),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(15),
    marginLeft: widthPercentage(20),
  },
  item: {
    width: widthPercentage(307),
    height: heightPercentage(50),
    marginTop: 5,
    marginHorizontal: 14,
  },
  title: {
    height: heightPercentage(24),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
  },
  date: {
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    textAlign: 'left',
    color: '#808080',
  },
});

function NoticeItem({title, date}: NoticeItemInterface) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

export default React.memo(NoticeItem);
