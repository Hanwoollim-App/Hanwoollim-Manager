import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/constant/common/design/Responsive';
import color from '../../../utils/constant/common/design/Color';
import SignInForm from './Form';
import CustomBtn from '../../common/CustomBtn';
import CustomStatusBar from '../../common/CustomStatusBar';
import CustomModal from '../../common/CustomModal';
import {customBtnType} from '../../../utils/types/customModal';
import {postSignIn, setAuthToken} from '../../../utils/constant/api';
import {UserInfoContext} from '../../../utils/context/UserInfoContext';
import {WhiteHanwoollimTextLogoImage} from '../../../assets';

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
  titleText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(15),
    textAlign: 'center',
    color: '#00203f',
    marginTop: heightPercentage(50),
  },
  middleGap: {
    marginTop: heightPercentage(75),
  },
  content: {
    alignItems: 'center',
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
    marginTop: heightPercentage(300),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(20),
    justifyContent: 'center',
    textAlign: 'center',
    color: '#ffffff',
  },
});

function SignIn() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();
  const {setUser}: any = useContext(UserInfoContext);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const changeVisible = () => {
    setModalVisible(!modalVisible);
  };

  const returnToSignIn = () => {
    navigation.navigate('SignIn');
    setModalVisible(!modalVisible);
  };

  const modalBtn: Array<customBtnType> = [
    {
      buttonText: '확인',
      buttonClickListener: returnToSignIn,
    },
  ];

  const cleanInput = () => {
    setId('');
    setPw('');
  };
  const signInBtnClickListener = () => {
    postSignIn({id, pw})
      .then((res: any) => {
        const {accessToken, position} = res.data;

        setAuthToken(accessToken);
        setUser(position);
        navigation.navigate('HomeNavigator');
      })
      .catch(() => {
        cleanInput();
        changeVisible();
      });
  };

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomModal
          mdVisible={modalVisible}
          title={'로그인 실패'}
          buttonList={modalBtn}
        />
        <View style={styles.header}>
          <Image
            style={styles.headerImg}
            source={WhiteHanwoollimTextLogoImage}
          />
        </View>
        <Text style={styles.titleText}>
          어서오세요 당신을 기다리고 있었어요!!
        </Text>
        <View style={styles.middleGap} />
        <View style={styles.content}>
          <SignInForm
            placeholder={'아이디'}
            inputChangeListener={(value: string) => setId(value)}
            defaultValue={id}
          />
          <SignInForm
            placeholder={'비밀번호'}
            inputChangeListener={(value: string) => setPw(value)}
            defaultValue={pw}
            isSecureInput
          />
          <CustomBtn
            title={'로그인'}
            titleStyle={styles.btnTextStyle}
            btnStyle={styles.btnStyle}
            onClickListener={signInBtnClickListener}
          />
        </View>
      </View>
    </>
  );
}

export default SignIn;
