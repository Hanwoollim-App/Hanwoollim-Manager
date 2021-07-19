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
    paddingLeft: 13,
  },
  ImageStyle: {
    width: widthPercentage(25),
    height: heightPercentage(25),
    marginTop: heightPercentage(37),
    marginLeft: widthPercentage(-40),
  },
  SectionStyle: {
    flexDirection: 'row',
  },
  SectionStyle2: {
    flexDirection: 'row',
    marginTop: heightPercentage(15),
    marginLeft: widthPercentage(23),
  },
  RedSquare: {
    width: 10,
    height: 10,
    backgroundColor: '#ff0000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
  },
  BlueSquare: {
    width: 10,
    height: 10,
    backgroundColor: '#1400ff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    marginLeft: widthPercentage(15),
  },
  BlackSquare: {
    width: 10,
    height: 10,
    backgroundColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    marginLeft: widthPercentage(15),
  },
  roleTextStyle: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 12,
    color: '#00203f',
    marginTop: heightPercentage(-4),
    marginLeft: widthPercentage(6),
  },
  ListStyle: {
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
    fontSize: 32,
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
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Notice() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Notice}
          headerLeft={true}
          leftIcon={icon}
          leftIconClickListner={navigation.goBack}
        />
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="검색"
            placeholderTextColor="#a2a2a2"
          />
          <Image
            source={require('../../../assets/images/searchIcon.png')}
            style={styles.ImageStyle}
          />
        </View>
        <View style={styles.SectionStyle2}>
          <View style={styles.RedSquare} />
          <Text style={styles.roleTextStyle}>관리자</Text>
          <View style={styles.BlueSquare} />
          <Text style={styles.roleTextStyle}>집행기</Text>
          <View style={styles.BlackSquare} />
          <Text style={styles.roleTextStyle}>일반 부원</Text>
        </View>
        <View style={styles.ListStyle}>
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

export default Notice;
