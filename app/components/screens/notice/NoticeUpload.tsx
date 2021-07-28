import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
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
import CustomBtn from '../../common/CustomBtn';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  postTitleBox: {
    width: widthPercentage(335),
    height: heightPercentage(46),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTitleBoxText: {
    width: '95%',
    height: '80%',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(16),
    marginLeft: widthPercentage(12),
    color: '#a2a2a2',
  },
  postBox: {
    width: widthPercentage(335),
    height: heightPercentage(274),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(19),
    marginLeft: widthPercentage(20),
  },
  btnStyle: {
    width: widthPercentage(290),
    height: heightPercentage(53),
    borderRadius: 21,
    backgroundColor: '#00203f',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    marginTop: heightPercentage(290),
    marginBottom: heightPercentage(46),
    marginLeft: widthPercentage(43),
  },
  btnTextStyle: {
    width: widthPercentage(152),
    height: heightPercentage(29),
    marginTop: heightPercentage(12),
    marginLeft: widthPercentage(69),
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(20),
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
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
          headerTitle={HEADER_TITLE.NoticeUpload}
          headerLeft
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />
        <View style={styles.postTitleBox}>
          <TextInput
            style={styles.postTitleBoxText}
            placeholder="제목"
            placeholderTextColor="#a2a2a2"
          />
        </View>
        <View style={styles.postBox}></View>
        <CustomBtn
          title={'공지사항 등록하기'}
          titleStyle={styles.btnTextStyle}
          btnStyle={styles.btnStyle}
          onClickListener={() => {}}
        />
      </View>
    </>
  );
}

export default NoticeDetail;
