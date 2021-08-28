import React, {memo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/constant/common/design/Responsive';
import StudentInterface from '../../../utils/types/studentItem';
import CustomModal from '../../common/CustomModal';
import {customBtnType} from '../../../utils/types/customModal';
import CustomBtn from '../../common/CustomBtn';
import color from '../../../utils/constant/common/design/Color';
import {APPROVE_BTN, APPROVE_MODAL} from '../../../utils/constant/approve';
import {getApprovalList, postApproval} from '../../../utils/constant/api';

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
  setApprovalList: React.Dispatch<
    React.SetStateAction<StudentInterface[] | undefined>
  >;
}
function StudentItem({
  userName,
  major,
  studentId,
  setApprovalList,
}: StudentItemInterface) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const approveClickListener = () => {
    setModalVisible(!modalVisible);
  };

  const approveModalClickListener = () => {
    postApproval(studentId).then(() => {
      setModalVisible(!modalVisible);
      return getApprovalList().then((res) => setApprovalList(res.data));
    });
  };

  const modalBtn1: Array<customBtnType> = [
    {
      buttonText: '네',
      buttonClickListener: approveModalClickListener,
    },
    {
      buttonText: '취소',
      buttonClickListener: () => setModalVisible(!modalVisible),
    },
  ];

  return (
    <View>
      <CustomModal
        mdVisible={modalVisible}
        title={APPROVE_MODAL}
        buttonList={modalBtn1}
        titleSize={fontPercentage(16)}
      />
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
