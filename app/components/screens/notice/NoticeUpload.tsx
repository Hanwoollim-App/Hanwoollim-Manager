import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import QuillEditor, {QuillToolbar} from 'react-native-cn-quill';
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

import CustomHeader from '../../common/CustomHeader';
import HEADER_TITLE from '../../../utils/constant/naviagation';
import CustomStatusBar from '../../common/CustomStatusBar';
import CustomBtn from '../../common/CustomBtn';
import CustomModal from '../../common/CustomModal';
import {customBtnType} from '../../../utils/types/customModal';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  postTitleBox: {
    width: widthPercentage(335),
    height: heightPercentage(46),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postTitleBoxText: {
    width: '95%',
    height: '80%',
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(16),
    marginLeft: widthPercentage(12),
  },
  postBox: {
    width: widthPercentage(335),
    height: heightPercentage(274),
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(19),
    marginLeft: widthPercentage(20),
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
    marginTop: heightPercentage(290),
    marginBottom: heightPercentage(46),
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
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
  },
});

function NoticeDetail() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );
  const _editor = React.createRef();
  const [modalVisible, setModalVisible] = useState(false);

  function changeVisible() {
    setModalVisible(!modalVisible);
  }
  function returnToMain() {
    navigation.navigate('HomeNavigator');
  }
  const modalBtn: Array<customBtnType> = [
    {
      buttonText: '확인',
      buttonClickListener: returnToMain,
    },
  ];

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomModal
          mdVisible={modalVisible}
          title={'등록되었습니다!'}
          buttonList={modalBtn}
        />
        <CustomHeader
          headerTitle={HEADER_TITLE.NoticeUpload}
          headerLeft
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />
        <View style={styles.postTitleBox}>
          <TextInput style={styles.postTitleBoxText} placeholder="제목" />
        </View>
        <View style={styles.postBox}>
          <QuillToolbar
            container="avoiding-view"
            editor={_editor}
            options="basic"
            theme="light"
          />
          <QuillEditor
            style={styles.editor}
            ref={_editor}
            initialHtml="<h1>Quill Editor for react-native</h1>"
          />
        </View>
        <CustomBtn
          title={'공지사항 등록하기'}
          titleStyle={styles.btnTextStyle}
          btnStyle={styles.btnStyle}
          onClickListener={changeVisible}
        />
      </View>
    </>
  );
}

export default NoticeDetail;
