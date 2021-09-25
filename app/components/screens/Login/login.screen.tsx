import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  color,
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils';
import {StatusBar} from '../../layout';
import {WhiteHanwoollimTextLogoImage} from '../../../assets';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: color.mainColor,
  },
  title: {
    flexBasis: heightPercentage(287),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleText: {
    top: '5%',
    width: '75%',
    height: '30%',
    resizeMode: 'cover',
  },
  titleUnderBar: {
    width: widthPercentage(261),
    height: heightPercentage(3),
    borderWidth: widthPercentage(0.5),
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#adefd1',
    borderStyle: 'solid',
    borderColor: '#707070',
  },
  titleSubText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(19),
    top: '3%',
    lineHeight: fontPercentage(29),
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#ffffff',
  },
  login: {
    height: heightPercentage(250),
    marginTop: heightPercentage(269),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginBtn: {
    width: widthPercentage(212),
    height: heightPercentage(52),
    borderRadius: widthPercentage(15),
    backgroundColor: color.subColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.16)',
        shadowOffset: {
          width: 0,
          height: heightPercentage(3),
        },
        shadowRadius: widthPercentage(6),
      },
      android: {
        elevation: 1,
      },
    }),
  },
  loginBtn_img: {
    width: widthPercentage(44),
    height: heightPercentage(44),
    resizeMode: 'contain',
  },
  loginBtn_text: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(15),
    lineHeight: fontPercentage(20),
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
    color: '#3c1e1e',
  },
});

export function Login() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const loginBtnClickListener = () => {
    navigation.navigate('SignIn');
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.root}>
        <View style={styles.title}>
          <Image
            style={styles.titleText}
            source={WhiteHanwoollimTextLogoImage}
          />
          <View style={styles.titleUnderBar} />
          <Text style={styles.titleSubText}>{'한울림 관리자용 앱입니다'}</Text>
        </View>
        <View style={styles.login}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={loginBtnClickListener}>
            <Text style={styles.loginBtn_text}>{'한울림 계정으로 로그인'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
