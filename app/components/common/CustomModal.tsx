import React from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import color from '../../utils/constant/common/design/Color';
import CustomBtn from './CustomBtn';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/constant/common/design/Responsive';
import {ModalsProps} from '../../utils/constant/custom/customModalUtils';

const styles = StyleSheet.create({
  modalView: {
    width: widthPercentage(250),
    alignItems: 'center',
    marginTop: heightPercentage(264),
    marginLeft: widthPercentage(63),
    backgroundColor: 'transparent',
  },
  content: {
    width: widthPercentage(250),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: widthPercentage(15),
    borderTopRightRadius: widthPercentage(15),
    backgroundColor: 'white',
    elevation: 5,
  },
  oneBtnContent: {
    width: widthPercentage(250),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentage(15),
    backgroundColor: 'white',
    elevation: 5,
  },
  titleStyle: {
    marginTop: heightPercentage(25),
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(15),
    letterSpacing: 1,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#000000',
  },
  subtitleStyle: {
    marginTop: heightPercentage(15),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(10),
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'gray',
  },
  BtnListStyle: {
    width: widthPercentage(250),
    height: heightPercentage(44),
    marginTop: heightPercentage(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  BtnListTitleStyle: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(15),
    textAlign: 'center',
    color: color.mainColor,
  },
  whiteLastBtn: {
    width: widthPercentage(250),
    height: heightPercentage(44),
    marginTop: heightPercentage(0.5),
    borderBottomLeftRadius: widthPercentage(15),
    borderBottomRightRadius: widthPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
  },
  blueLastBtn: {
    width: widthPercentage(250),
    height: heightPercentage(44),
    marginTop: heightPercentage(10),
    borderRadius: widthPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.mainColor,
    elevation: 5,
  },
  blueLastBtnTitle: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(15),
    textAlign: 'center',
    color: 'white',
  },
});

function CustomModal({
  mdVisible,
  title,
  subtitle = '',
  buttonList,
}: ModalsProps) {
  const last = buttonList.pop();
  const second = buttonList.pop(); // if the array is empty, return undefined

  return (
    <Modal animationType="slide" visible={mdVisible} transparent={true}>
      <View style={styles.modalView}>
        {second === undefined ? (
          <View style={styles.oneBtnContent}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subtitleStyle}>{subtitle}</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={styles.subtitleStyle}>{subtitle}</Text>
          </View>
        )}
        {buttonList.map((result, i) => {
          return (
            <CustomBtn
              key={i}
              title={result.buttonText}
              onClickListener={result.buttonClickListener}
              titleStyle={styles.BtnListTitleStyle}
              btnStyle={styles.BtnListStyle}
            />
          );
        })}
        {second !== undefined ? (
          <CustomBtn
            title={second.buttonText}
            onClickListener={second.buttonClickListener}
            titleStyle={styles.BtnListTitleStyle}
            btnStyle={styles.whiteLastBtn}
          />
        ) : (
          <View />
        )}
        {last !== undefined ? (
          <CustomBtn
            title={last.buttonText}
            onClickListener={last.buttonClickListener}
            titleStyle={styles.blueLastBtnTitle}
            btnStyle={styles.blueLastBtn}
          />
        ) : (
          <View />
        )}
      </View>
    </Modal>
  );
}

export default React.memo(CustomModal);
