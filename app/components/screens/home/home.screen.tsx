import React from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import {useAndroidBackHandler} from 'react-navigation-backhandler';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/api/responsive/responsive.api';
import {WhiteHanwoollimTextLogoImage} from '../../../assets';
import {color} from '../../../utils';
import {NavigationBlock, StatusBar} from '../../layout';
import {MAIN_MENU, TITLE} from './home.data';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: heightPercentage(57),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.mainColor,
  },
  headerImg: {
    width: widthPercentage(203),
    height: heightPercentage(62.4),
  },
  title: {
    height: heightPercentage(51),
    marginLeft: widthPercentage(20),
  },
  titleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(24),
    ...Platform.select({
      android: {lineHeight: heightPercentage(40)},
    }),
  },
  btnStyle: {
    width: widthPercentage(335),
    height: heightPercentage(58),
    marginTop: heightPercentage(16),
    marginLeft: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: widthPercentage(10),
    backgroundColor: 'white',
  },
  btnTextStyle: {
    fontFamily: 'NotoSansKR-Bold',
    marginLeft: widthPercentage(13),
    justifyContent: 'center',
    fontSize: fontPercentage(18),
    lineHeight: heightPercentage(33),
  },
  iconStyle: {
    flex: 1,
    height: heightPercentage(13.7),
    marginRight: widthPercentage(15),
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

const icon = <FontAwesomeIcon icon={faChevronRight} />;

export function Home() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  useAndroidBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  type menuType = {
    menuTitle: string;
    menuNavigating: string;
  };
  const menuList: Array<menuType> = [
    {menuTitle: MAIN_MENU.Member, menuNavigating: 'Member'},
    {menuTitle: MAIN_MENU.Notice, menuNavigating: 'Notice'},
    {menuTitle: MAIN_MENU.Reservation, menuNavigating: 'Reservation'},
    {menuTitle: MAIN_MENU.Approval, menuNavigating: 'Approval'},
  ];

  return (
    <>
      <StatusBar />
      <View style={styles.root}>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.headerImg}
              source={WhiteHanwoollimTextLogoImage}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{TITLE}</Text>
        </View>
        {menuList.map((list, i) => {
          return (
            <NavigationBlock
              key={i}
              title={list.menuTitle}
              titleStyle={styles.btnTextStyle}
              btnStyle={styles.btnStyle}
              onClickListener={() => navigation.navigate(list.menuNavigating)}
              icon={icon}
              iconStyle={styles.iconStyle}
            />
          );
        })}
      </View>
    </>
  );
}
