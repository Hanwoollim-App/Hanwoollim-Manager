import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
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
import BtnWithIcon from '../../common/BtnWithIcon';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/constant/common/design/Responsive';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  list: {
    width: widthPercentage(335),
    height: heightPercentage(618),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(15),
    marginLeft: widthPercentage(20),
  },
  item: {
    width: widthPercentage(307),
    height: heightPercentage(50),
    marginTop: 5,
    marginHorizontal: 14,
  },
  itemSeparator: {
    marginLeft: widthPercentage(14),
    height: heightPercentage(1),
    width: widthPercentage(307),
    backgroundColor: '#c2c2c2',
  },
  title: {
    height: heightPercentage(24),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
  },
  date: {
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    textAlign: 'left',
    color: '#808080',
  },
  btnStyle: {
    width: widthPercentage(290),
    height: heightPercentage(53),
    borderRadius: 21,
    backgroundColor: '#00203f',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
    marginTop: heightPercentage(18),
    marginLeft: widthPercentage(43),
  },
  btnTextStyle: {
    width: widthPercentage(152),
    height: heightPercentage(29),
    marginTop: heightPercentage(12),
    marginLeft: widthPercentage(69),
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(20),
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
  },
});

const DATA = [
  {
    id: '1',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '2',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '3',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '4',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '5',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '6',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '7',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '8',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '9',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '10',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '11',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '12',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
  {
    id: '13',
    title: '한울림 공지사항',
    date: '2021.01.01',
  },
];
const Item = ({title, date}: {title: string; date: number}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.date}>{date}</Text>
  </View>
);

function Notice() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );
  const renderItem: ({item}: {item: Array}) => any = ({item}) => (
    <Item title={item.title} date={item.date} />
  );
  const renderSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Notice}
          headerLeft={true}
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />

        <View style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
        <BtnWithIcon
          title={'공지사항 등록하기'}
          titleStyle={styles.btnTextStyle}
          btnStyle={styles.btnStyle}
          onClickListener={() => {}}
        />
      </View>
    </>
  );
}

export default Notice;
