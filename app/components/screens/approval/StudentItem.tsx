import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/api/responsive/responsive.api';
import StudentInterface from '../../../utils/types/student-item.type';
import CustomBtn from '../../layout/cta-button.layout';
import color from '../../../utils/data/color/type';
import {APPROVE_BTN} from './student-item.data';

const styles = StyleSheet.create({
  list: {
    width: widthPercentage(335),
    height: heightPercentage(55),
    flexDirection: 'row',
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
    color: '#808080',
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
  },
});

interface StudentItemInterface extends StudentInterface {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedId: React.Dispatch<React.SetStateAction<string | undefined>>;
}
function StudentItem({
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
    <View>
      <View style={styles.list}>
        <View style={styles.item}>
          <View>
            <Text style={styles.name}>{userName}</Text>
            <View style={styles.itemSection}>
              <Text style={styles.major}>{major}</Text>
              <Text style={styles.studentCode}>{studentId}</Text>
            </View>
          </View>
          <CustomBtn
            title={APPROVE_BTN}
            titleStyle={styles.title}
            btnStyle={styles.Btn}
            onClickListener={approveClickListener}
          />
        </View>
      </View>
    </View>
  );
}

export default memo(StudentItem);
