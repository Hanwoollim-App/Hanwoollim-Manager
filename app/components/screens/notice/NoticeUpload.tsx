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

import CustomHeader from '../../layout/header.layout';
import HEADER_TITLE from '../../../utils/constant/navigation';
import CustomStatusBar from '../../layout/status-bar.layout';
import CustomBtn from '../../layout/cta-button.layout';
import CustomModal from '../../layout/modal.layout';
import {customBtnType} from '../../../utils/types/customModal';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  postTitleBox: {
    width: widthPercentage(335),
    height: heightPercentage(46),
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(20),
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
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    marginTop: heightPercentage(19),
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
    marginTop: heightPercentage(274),
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
  editor: {
    flex: 1,
    padding: 0,
    borderColor: 'gray',
    borderWidth: widthPercentage(1),
    marginHorizontal: widthPercentage(5),
    marginVertical: heightPercentage(5),
    backgroundColor: 'white',
  },
});

function NoticeDetail() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );
  const _editor = React.createRef();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const changeVisible = () => {
    setModalVisible(!modalVisible);
  };

  const returnToMain = () => {
    navigation.navigate('HomeNavigator');
  };
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
          <TextInput
            style={styles.postTitleBoxText}
            placeholder="제목"
            placeholderTextColor="#a2a2a2"
          />
        </View>
        <View style={styles.postBox}>
          <QuillToolbar
            container="avoiding-view"
            editor={_editor}
            options="basic"
            theme={{size: 23}}
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
