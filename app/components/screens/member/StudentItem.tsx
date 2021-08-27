import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
import StudentInterface from '../../../utils/types/studentItem';
import CustomModal from '../../common/CustomModal';
import {customBtnType} from '../../../utils/types/customModal';

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

function StudentItem({name, major, studentCode}: StudentInterface) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [modalVisible1, setModalVisible] = useState<boolean>(false);
  const [modalVisible2, setModalVisible2] = useState<boolean>(false);
  const [modalVisible3, setModalVisible3] = useState<boolean>(false);
  const [modalVisible4, setModalVisible4] = useState<boolean>(false);
  const [modalVisible5, setModalVisible5] = useState<boolean>(false);

  const studentItemClickListener = () => {
    setModalVisible(!modalVisible1);
  };

  const adminRole = () => {
    setModalVisible(!modalVisible1);
    setModalVisible2(!modalVisible2);
  };
  const managerRole = () => {
    setModalVisible(!modalVisible1);
    setModalVisible3(!modalVisible3);
  };

  const deleteAccount = () => {
    setModalVisible(!modalVisible1);
    setModalVisible4(!modalVisible4);
  };

  const deleteConfirm = () => {
    setModalVisible4(!modalVisible4);
    setModalVisible5(!modalVisible5);
  };

  const returnToMain = () => {
    setModalVisible(false);
    setModalVisible2(false);
    setModalVisible3(false);
    setModalVisible4(false);
    setModalVisible5(false);
  };

  const returnToLogin = () => {
    navigation.navigate('Login');
  };

  const modalBtn1: Array<customBtnType> = [
    {
      buttonText: '회장 직위 부여',
      buttonClickListener: adminRole,
    },
    {
      buttonText: '집행기 직위 부여',
      buttonClickListener: managerRole,
    },
    {
      buttonText: '회원 탈퇴 처리',
      buttonClickListener: deleteAccount,
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToMain,
    },
  ];

  const modalBtn2: Array<customBtnType> = [
    {
      buttonText: '네',
      buttonClickListener: returnToLogin,
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToMain,
    },
  ];

  const modalBtn3: Array<customBtnType> = [
    {
      buttonText: '네',
      buttonClickListener: returnToMain,
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToMain,
    },
  ];

  const modalBtn4: Array<customBtnType> = [
    {
      buttonText: '네',
      buttonClickListener: deleteConfirm,
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToMain,
    },
  ];

  const modalBtn5: Array<customBtnType> = [
    {
      buttonText: '확인',
      buttonClickListener: returnToMain,
    },
  ];

  return (
    <View>
      <CustomModal
        mdVisible={modalVisible1}
        title={'어떤 작업을 수행하시겠습니까?'}
        buttonList={modalBtn1}
      />
      <CustomModal
        mdVisible={modalVisible2}
        title={'정말로 회장 직위를 넘기시겠습니까?'}
        subtitle={'회장 직위를 넘기고 나서는\n이 어플을 사용하실 수 없습니다.'}
        buttonList={modalBtn2}
      />
      <CustomModal
        mdVisible={modalVisible3}
        title={'정말로 집행기로 지정하시겠습니까?'}
        buttonList={modalBtn3}
      />
      <CustomModal
        mdVisible={modalVisible4}
        title={'이 회원을 탈퇴 처리하시겠습니까?'}
        subtitle={`${name} / ${major}`}
        buttonList={modalBtn4}
      />
      <CustomModal
        mdVisible={modalVisible5}
        title={'성공적으로 탈퇴 처리되었습니다!'}
        buttonList={modalBtn5}
      />
      <TouchableOpacity onPress={studentItemClickListener}>
        <View style={styles.item}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.itemSection}>
            <Text style={styles.major}>{major}</Text>
            <Text style={styles.studentCode}>{studentCode}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default memo(StudentItem);
