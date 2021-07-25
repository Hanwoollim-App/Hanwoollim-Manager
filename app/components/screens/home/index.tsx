import React, {useState} from 'react';
import {View, Text, BackHandler, StyleSheet, Image} from 'react-native';
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
} from '../../../utils/constant/common/design/Responsive';
import color from '../../../utils/constant/common/design/Color';
import NavigationBlock from '../../common/NavigationBlock';
import {MAIN_MENU, TITLE} from '../../../utils/constant/main';
import CustomStatusBar from '../../common/CustomStatusBar';
import CustomModal from '../../common/CustomModal';
import {customBtnType} from '../../../utils/types/customModal';

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
    width: '100%',
    height: heightPercentage(51),
    marginLeft: widthPercentage(20),
  },
  titleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(24),
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
    fontSize: fontPercentage(20),
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
const headerLogo = require('../../../assets/images/HanwoollimWhite.png');

function Home() {
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
  ];

  const [modalVisible, setModalVisible] = useState(false);

  function changeVisible() {
    setModalVisible(!modalVisible);
  }
  const modalBtn: Array<customBtnType> = [
    {
      buttonText: '1번',
      buttonClickListener: changeVisible,
    },
    {
      buttonText: '2번',
      buttonClickListener: changeVisible,
    },
    {
      buttonText: '3번',
      buttonClickListener: changeVisible,
    },
  ];

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomModal
          mdVisible={modalVisible}
          title={'타이틀 테스트'}
          subtitle={'서브타이틀 테스트'}
          buttonList={modalBtn}
        />
        <View style={styles.header}>
          <View>
            <Image style={styles.headerImg} source={headerLogo} />
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
        <NavigationBlock
          title={'모달 테스트'}
          titleStyle={styles.btnTextStyle}
          btnStyle={styles.btnStyle}
          onClickListener={changeVisible}
          icon={icon}
          iconStyle={styles.iconStyle}
        />
      </View>
    </>
  );
}

export default Home;
