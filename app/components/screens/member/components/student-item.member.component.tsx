import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
  StudentInterface,
} from '../../../../utils';

const styles = StyleSheet.create({
  item: {
    width: widthPercentage(307),
    height: heightPercentage(50),
    marginTop: 5,
    marginHorizontal: 14,
  },
  box: {
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
    lineHeight: heightPercentage(23),
  },
  major: {
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    color: '#808080',
    lineHeight: heightPercentage(20),
  },
  studentCode: {
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    color: '#808080',
    lineHeight: heightPercentage(20),
  },
  itemSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

interface StudentItemInterface extends StudentInterface {
  position?: string;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedUser: React.Dispatch<
    React.SetStateAction<StudentInterface | undefined>
  >;
}

export function StudentItem({
  userName,
  major,
  studentId,
  position,
  setModalVisible,
  setSelectedUser,
}: StudentItemInterface) {
  const studentItemClickListener = () => {
    setModalVisible((prior) => !prior);
    setSelectedUser({userName, major, studentId, position});
  };

  return (
    <View style={styles.box}>
      <TouchableOpacity onPress={studentItemClickListener}>
        <View style={styles.item}>
          <Text style={[styles.name, position === 'admin' && {color: 'blue'}]}>
            {userName}
          </Text>
          <View style={styles.itemSection}>
            <Text style={styles.major}>{major}</Text>
            <Text style={styles.studentCode}>{studentId}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
