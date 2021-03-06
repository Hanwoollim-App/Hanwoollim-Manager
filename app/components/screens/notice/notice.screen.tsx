import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {Header, StatusBar, CTAButton} from '../../layout';
import {HEADER_TITLE} from './notice.data';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils';
import {INoticeItemProps, NoticeItem} from './components';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: widthPercentage(335),
    height: heightPercentage(600),
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
  btnStyle: {
    width: widthPercentage(290),
    height: heightPercentage(53),
    borderRadius: widthPercentage(21),
    backgroundColor: '#00203f',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: heightPercentage(3),
    },
    shadowRadius: widthPercentage(6),
    shadowOpacity: 1,
    marginTop: heightPercentage(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(20),
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: heightPercentage(31),
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

const renderSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

export function Notice() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );

  return (
    <>
      <StatusBar />
      <View style={styles.root}>
        <Header
          headerTitle={HEADER_TITLE.Notice}
          headerLeft
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />

        <View style={styles.list}>
          <FlatList
            data={DATA}
            renderItem={({item: notice}: {item: INoticeItemProps}) => (
              <NoticeItem title={notice.title} date={notice.date} />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
        <CTAButton
          title={'공지사항 등록하기'}
          titleStyle={styles.btnTextStyle}
          btnStyle={styles.btnStyle}
          onClickListener={() => {
            navigation.navigate('NoticeNavigator', {screen: 'NoticeUpload'});
          }}
        />
      </View>
    </>
  );
}
