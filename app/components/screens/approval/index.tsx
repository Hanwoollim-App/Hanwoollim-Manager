import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Image, FlatList} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/constant/common/design/Responsive';
import StudentInterface from '../../../utils/types/studentItem';
import StudentItem from './StudentItem';
import {MAIN_MENU} from '../../../utils/constant/main';
import ScreenWrapper from '../../common/ScreenWrapper';
import {getApprovalList} from '../../../utils/constant/api';

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

const searchIcon = require('../../../assets/images/searchIcon.png');

const renderSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

function Approval() {
  const [approvalList, setApprovalList] = useState<Array<StudentInterface>>();

  useEffect(() => {
    getApprovalList().then((res) => {
      setApprovalList(res.data);
    });
  }, []);

  return (
    <ScreenWrapper headerTitle={MAIN_MENU.Approval}>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="검색"
          placeholderTextColor="#a2a2a2"
        />
        <Image source={searchIcon} style={styles.searchIcon} />
      </View>
      <View style={styles.list}>
        <FlatList
          data={approvalList}
          renderItem={({item: student}: {item: StudentInterface}) => (
            <StudentItem
              userName={student.userName}
              major={student.major}
              studentId={student.studentId}
              setApprovalList={setApprovalList}
            />
          )}
          keyExtractor={(item) => item.studentId}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </ScreenWrapper>
  );
}

export default Approval;
