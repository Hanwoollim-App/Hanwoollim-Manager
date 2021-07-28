import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/constant/common/design/Responsive';

import CustomHeader from '../../common/CustomHeader';
import HEADER_TITLE from '../../../utils/constant/naviagation';
import CustomStatusBar from '../../common/CustomStatusBar';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleBox: {
    width: widthPercentage(335),
    height: heightPercentage(72),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(20),
  },
  title: {
    width: widthPercentage(107),
    height: heightPercentage(24),
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(16),
    marginTop: heightPercentage(11),
    marginLeft: widthPercentage(15),
    color: '#000000',
  },
  date: {
    width: widthPercentage(60),
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    marginTop: heightPercentage(7),
    marginLeft: widthPercentage(16),
    color: '#808080',
  },
  writer: {
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    marginLeft: widthPercentage(178),
    marginTop: heightPercentage(7),
    color: '#808080',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function NoticeDetail() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Notice}
          headerLeft
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />
        <View style={styles.titleBox}>
          <Text style={styles.title}>한울림 공지사항</Text>
          <View style={styles.titleRow}>
            <Text style={styles.date}>2021.01.01</Text>
            <Text style={styles.writer}>작성자 관리자</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default NoticeDetail;
