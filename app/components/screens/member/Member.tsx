import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, FlatList} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import CustomHeader from '../../common/CustomHeader';
import HEADER_TITLE from '../../../utils/constant/naviagation/NavigationheaderUtils';
import CustomStatusBar from '../../common/CustomStatusBar';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/constant/common/design/Responsive';
import Student from '../../common/Student';
import {StudentInterface} from '../../common/StudentInterface';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchSection: {
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(20),
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
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(15),
    marginLeft: widthPercentage(20),
  },
  itemSeparator: {
    marginLeft: widthPercentage(14),
    height: heightPercentage(1),
    width: widthPercentage(307),
    backgroundColor: '#c2c2c2',
  },
});

const tempData: Array<StudentInterface> = [
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '정재헌',
    major: '기계공학과',
    studentCode: '2019024357',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
  {
    name: '조성진',
    major: '산업공학과',
    studentCode: '2021086326',
  },
];
const searchIcon = require('../../../assets/images/searchIcon.png');

const renderSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

const icon = <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />;

function Member() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Member}
          headerLeft={true}
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="검색"
            placeholderTextColor="#a2a2a2"
          />
          <Image source={searchIcon} style={styles.searchIcon} />
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
            data={tempData}
            renderItem={({item: student}: {item: StudentInterface}) => (
              <Student
                name={student.name}
                major={student.major}
                studentCode={student.studentCode}
              />
            )}
            keyExtractor={(item) => item.studentCode}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      </View>
    </>
  );
}

export default Member;
