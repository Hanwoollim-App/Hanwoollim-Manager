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

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchTextInput: {
    width: widthPercentage(335),
    height: heightPercentage(58),
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: widthPercentage(10),
    backgroundColor: 'white',
    fontSize: fontPercentage(20),
    fontFamily: 'NotoSansKR-Bold',
    paddingLeft: widthPercentage(13),
  },
  imageStyle: {
    width: widthPercentage(25),
    height: heightPercentage(25),
    marginTop: heightPercentage(37),
    marginLeft: widthPercentage(-40),
  },
  searchSection: {
    flexDirection: 'row',
  },
  roleSection: {
    flexDirection: 'row',
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
  roleTextStyle: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    color: '#00203f',
    marginTop: heightPercentage(-4),
    marginLeft: widthPercentage(6),
  },
  listStyle: {
    width: widthPercentage(335),
    height: heightPercentage(609),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(15),
    marginLeft: widthPercentage(20),
  },
  item: {
    width: widthPercentage(307),
    height: heightPercentage(50),
    backgroundColor: '#808080',
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 14,
  },
  title: {
    fontSize: fontPercentage(32),
  },
});

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Forth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Sixth Item',
  },
  {
    id: '7',
    title: 'Seventh Item',
  },
  {
    id: '8',
    title: 'Eighth Item',
  },
  {
    id: '9',
    title: 'Ninth Item',
  },
  {
    id: '10',
    title: 'Tenth Item',
  },
];
const Item = ({title}: {title: string}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const searchIcon = require('../../../assets/images/searchIcon.png');

function Member() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );
  const renderItem: ({item}: {item: Array}) => any = ({item}) => (
    <Item title={item.title} />
  );

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Member}
          headerLeft={true}
          leftIcon={icon}
          leftIconClickListner={navigation.goBack}
        />
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="검색"
            placeholderTextColor="#a2a2a2"
          />
          <Image source={searchIcon} style={styles.imageStyle} />
        </View>
        <View style={styles.roleSection}>
          <View style={styles.redSquare} />
          <Text style={styles.roleTextStyle}>관리자</Text>
          <View style={styles.blueSquare} />
          <Text style={styles.roleTextStyle}>집행기</Text>
          <View style={styles.blackSquare} />
          <Text style={styles.roleTextStyle}>일반 부원</Text>
        </View>
        <View style={styles.listStyle}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

export default Member;
