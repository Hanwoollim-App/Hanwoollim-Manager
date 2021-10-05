import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Image, FlatList} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
  StudentInterface,
} from '../../../utils';
import {StudentItem} from './components';
import {ScreenWrapper, Modal, ICTAButton} from '../../layout';
import {getUserList, postManageUser} from '../../../utils/api/axios';
import {APPOINT_MANAGER, DELETE_USER} from './member.data';
import {SearchImage} from '../../../assets';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchSection: {
    marginTop: heightPercentage(20),
    width: widthPercentage(335),
    height: heightPercentage(58),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: widthPercentage(10),
    backgroundColor: 'white',
  },
  searchTextInput: {
    width: '85%',
    height: '80%',
    fontSize: fontPercentage(20),
    lineHeight: fontPercentage(25),
    fontFamily: 'NotoSansKR-Bold',
    paddingLeft: widthPercentage(13),
  },
  searchIcon: {
    width: widthPercentage(25),
    height: heightPercentage(25),
    resizeMode: 'contain',
    marginRight: widthPercentage(18),
  },
  roleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPercentage(15),
  },
  redSquare: {
    width: widthPercentage(10),
    height: heightPercentage(10),
    backgroundColor: '#ff0000',
    borderStyle: 'solid',
    borderWidth: widthPercentage(1),
    borderColor: '#707070',
  },
  blueSquare: {
    width: widthPercentage(10),
    height: heightPercentage(10),
    backgroundColor: '#1400ff',
    borderStyle: 'solid',
    borderWidth: widthPercentage(1),
    borderColor: '#707070',
    marginLeft: widthPercentage(15),
  },
  blackSquare: {
    width: widthPercentage(10),
    height: heightPercentage(10),
    backgroundColor: '#000000',
    borderStyle: 'solid',
    borderWidth: widthPercentage(1),
    borderColor: '#707070',
    marginLeft: widthPercentage(15),
  },
  roleText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    marginLeft: widthPercentage(6),
    color: '#00203f',
  },
  list: {
    width: widthPercentage(335),
    height: heightPercentage(609),
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(15),
  },
  itemSeparator: {
    marginLeft: widthPercentage(14),
    height: heightPercentage(1),
    width: widthPercentage(307),
    backgroundColor: '#c2c2c2',
  },
});

const renderSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

export function Member() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [userList, setUserList] = useState<Array<StudentInterface>>();
  const [selectedUser, setSelectedUser] = useState<StudentInterface>();

  const [modal, setModal] = useState<boolean>(false);
  const [chairmanModal, setChairmanModal] = useState<boolean>(false);
  const [managerModal, setManagerModal] = useState<boolean>(false);
  const [deleteUserModal, setDeleteUserModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [fail, setFail] = useState<boolean>(false);

  const clearData = () => {
    setSelectedUser(undefined);
  };

  const adminRole = () => {
    setModal(!modal);
    setChairmanModal(!chairmanModal);
  };
  const managerRole = () => {
    setModal(!modal);
    setManagerModal(!managerModal);
  };

  const deleteAccount = () => {
    setModal(!modal);
    setDeleteUserModal(!deleteUserModal);
  };

  const returnToMain = () => {
    clearData();
    setModal(false);
    setChairmanModal(false);
    setManagerModal(false);
    setDeleteUserModal(false);
    setSuccessModal(false);
    setFail(false);
  };

  const returnToLogin = () => {
    navigation.navigate('Login');
  };

  const manageUser = (type: number) => {
    selectedUser &&
      postManageUser(type, selectedUser.studentId)
        .then((res) => {
          returnToMain();
          setSuccessModal(!successModal);
        })
        .catch(() => {
          returnToMain();
          setFail(!fail);
        });
  };

  const modalBtn: Array<ICTAButton> = [
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

  const chairmanModalBtn: Array<ICTAButton> = [
    {
      buttonText: '네',
      buttonClickListener: returnToLogin,
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToMain,
    },
  ];

  const managerModalBtn: Array<ICTAButton> = [
    {
      buttonText: '네',
      buttonClickListener: () => manageUser(APPOINT_MANAGER),
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToMain,
    },
  ];

  const deleteUserModalBtn: Array<ICTAButton> = [
    {
      buttonText: '네',
      buttonClickListener: () => manageUser(DELETE_USER),
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToMain,
    },
  ];

  const okayModalBtn: Array<ICTAButton> = [
    {
      buttonText: '확인',
      buttonClickListener: returnToMain,
    },
  ];

  useEffect(() => {
    getUserList()
      .then((res) => {
        setUserList(res.data);
      })
      .catch(() => {
        setFail(!fail);
      });
  }, [managerModal, deleteUserModal]);

  return (
    <ScreenWrapper headerTitle={'회원 목록'}>
      <Modal
        mdVisible={modal}
        title={'어떤 작업을 수행하시겠습니까?'}
        buttonList={modalBtn}
      />
      <Modal
        mdVisible={chairmanModal}
        title={'정말로 회장 직위를 넘기시겠습니까?'}
        subtitle={'회장 직위를 넘기고 나서는\n이 어플을 사용하실 수 없습니다.'}
        buttonList={chairmanModalBtn}
      />
      <Modal
        mdVisible={managerModal}
        title={'정말로 집행기로 지정하시겠습니까?'}
        buttonList={managerModalBtn}
      />
      {selectedUser && (
        <Modal
          mdVisible={deleteUserModal}
          title={'이 회원을 탈퇴 처리하시겠습니까?'}
          subtitle={`${selectedUser.userName} / ${selectedUser.major}`}
          buttonList={deleteUserModalBtn}
        />
      )}
      <Modal
        mdVisible={successModal}
        title={'성공'}
        buttonList={okayModalBtn}
      />
      <Modal mdVisible={fail} title={'실패'} buttonList={okayModalBtn} />
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="검색"
          placeholderTextColor="#a2a2a2"
        />
        <Image source={SearchImage} style={styles.searchIcon} />
      </View>
      <View style={styles.roleSection}>
        <View style={styles.redSquare} />
        <Text style={styles.roleText}>관리자</Text>
        <View style={styles.blueSquare} />
        <Text style={styles.roleText}>집행기</Text>
        <View style={styles.blackSquare} />
        <Text style={styles.roleText}>일반 부원</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={userList}
          renderItem={({item: student}) => (
            <StudentItem
              userName={student.userName}
              major={student.major}
              studentId={student.studentId}
              position={student.position}
              setModalVisible={setModal}
              setSelectedUser={setSelectedUser}
            />
          )}
          keyExtractor={(item) => item.studentId}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </ScreenWrapper>
  );
}
