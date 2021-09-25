import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Image, FlatList} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/api/responsive/responsive.api';
import StudentInterface from '../../../utils/types/student-item.type';
import {getApprovalList, postApproval} from '../../../utils/api/axios';
import {APPROVE_MODAL} from './components/student-item.data';
import {SearchImage} from '../../../assets';
import {ScreenWrapper, customBtnType, Modal} from '../../layout';
import {MAIN_MENU} from '../home/home.data';
import {StudentItem} from './components';

const styles = StyleSheet.create({
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
    marginLeft: widthPercentage(23),
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
    paddingTop: heightPercentage(11),
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

export function Approval() {
  const [approvalList, setApprovalList] = useState<Array<StudentInterface>>();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>();

  const clearSelectedId = () => {
    setSelectedId('');
  };

  useEffect(() => {
    if (!modalVisible) {
      getApprovalList().then((res) => {
        setApprovalList(res.data);
      });
    }
  }, [modalVisible]);

  const approveModalClickListener = () => {
    selectedId &&
      postApproval(selectedId)
        .then(() => {
          setModalVisible(!modalVisible);
          clearSelectedId();
        })
        .catch(() => {
          setModalVisible(!modalVisible);
          clearSelectedId();
        });
  };

  const modalBtn1: Array<customBtnType> = [
    {
      buttonText: '네',
      buttonClickListener: approveModalClickListener,
    },
    {
      buttonText: '취소',
      buttonClickListener: () => {
        setModalVisible(!modalVisible);
        clearSelectedId();
      },
    },
  ];

  return (
    <ScreenWrapper headerTitle={MAIN_MENU.Approval}>
      <Modal
        mdVisible={modalVisible}
        title={APPROVE_MODAL}
        buttonList={modalBtn1}
        titleSize={fontPercentage(16)}
      />
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="검색"
          placeholderTextColor="#a2a2a2"
        />
        <Image source={SearchImage} style={styles.searchIcon} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={approvalList}
          renderItem={({item: student}: {item: StudentInterface}) => (
            <StudentItem
              userName={student.userName}
              major={student.major}
              studentId={student.studentId}
              setModalVisible={setModalVisible}
              setSelectedId={setSelectedId}
            />
          )}
          keyExtractor={(item) => item.studentId}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </ScreenWrapper>
  );
}
