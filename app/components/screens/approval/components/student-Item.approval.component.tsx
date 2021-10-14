import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  color,
  fontPercentage,
  heightPercentage,
  widthPercentage,
  StudentInterface,
} from '../../../../utils';
import {CTAButton} from '../../../layout';
import {APPROVE_BTN} from './student-item.data';

const styles = StyleSheet.create({
  list: {
    width: widthPercentage(335),
    height: heightPercentage(55),
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: widthPercentage(307),
    height: heightPercentage(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
  },
  major: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    color: '#808080',
    lineHeight: heightPercentage(16),
  },
  studentCode: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    color: '#808080',
    lineHeight: heightPercentage(16),
  },
  itemSection: {
    flexDirection: 'row',
  },
  Btn: {
    width: widthPercentage(59),
    height: heightPercentage(37),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPercentage(15),
    borderWidth: widthPercentage(1),
    borderColor: color.subColor,
    backgroundColor: color.mainColor,
  },
  title: {
    color: color.subColor,
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(14),
    lineHeight: heightPercentage(28),
  },
});

interface StudentItemInterface extends StudentInterface {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function StudentItem({
  userName,
  major,
  studentId,
  setModalVisible,
  setSelectedId,
}: StudentItemInterface) {
  const approveClickListener = () => {
    setModalVisible((prior) => !prior);
    setSelectedId(studentId);
  };

  return (
    <View style={styles.list}>
      <View style={styles.item}>
        <View style={styles.box}>
          <Text style={styles.name}>{userName}</Text>
          <View style={styles.itemSection}>
            <Text style={styles.major}>{major}</Text>
            <Text style={styles.studentCode}>{` ${studentId}`}</Text>
          </View>
        </View>
        <CTAButton
          title={APPROVE_BTN}
          titleStyle={styles.title}
          btnStyle={styles.Btn}
          onClickListener={approveClickListener}
        />
      </View>
    </View>
  );
}
