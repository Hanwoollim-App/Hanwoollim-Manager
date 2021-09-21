import React from 'react';
import {Text, View, Modal as RNModal, StyleSheet, Platform} from 'react-native';
import color from '../../utils/constant/common/design/Color';
import {CTAButton} from './cta-button.layout';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../utils/constant/common/design/Responsive';
import {customBtnType} from '../../utils/types/customModal';

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    width: widthPercentage(250),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: widthPercentage(15),
    borderTopRightRadius: widthPercentage(15),
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: widthPercentage(0.25),
        shadowRadius: widthPercentage(3.84),
        shadowOffset: {
          height: heightPercentage(2),
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  oneBtnContent: {
    width: widthPercentage(250),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentage(15),
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: widthPercentage(0.25),
        shadowRadius: widthPercentage(3.84),
        shadowOffset: {
          height: heightPercentage(2),
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: {
    margin: heightPercentage(25),
    fontFamily: 'NotoSansKR-Bold',
    letterSpacing: 1,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#000000',
  },
  subtitle: {
    marginBottom: heightPercentage(15),
    fontFamily: 'NotoSansKR-Regular',
    fontStyle: 'normal',
    textAlign: 'center',
    color: 'gray',
  },
  btnList: {
    width: widthPercentage(250),
    height: heightPercentage(44),
    marginTop: heightPercentage(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: widthPercentage(0.25),
        shadowRadius: widthPercentage(3.84),
        shadowOffset: {
          height: heightPercentage(2),
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  btnListTitle: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(15),
    textAlign: 'center',
    color: color.mainColor,
  },
  whiteLastBtn: {
    width: widthPercentage(250),
    height: heightPercentage(44),
    marginTop: heightPercentage(0.3),
    borderBottomLeftRadius: widthPercentage(15),
    borderBottomRightRadius: widthPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: widthPercentage(0.25),
        shadowRadius: widthPercentage(3.84),
        shadowOffset: {
          height: heightPercentage(2),
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  blueLastBtn: {
    width: widthPercentage(250),
    height: heightPercentage(44),
    marginTop: heightPercentage(10),
    borderRadius: widthPercentage(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.mainColor,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: widthPercentage(0.25),
        shadowRadius: widthPercentage(3.84),
        shadowOffset: {
          height: heightPercentage(2),
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  blueLastBtnTitle: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(17),
    textAlign: 'center',
    color: 'white',
  },
});

type IModalsProps = {
  mdVisible: boolean;
  title: string;
  subtitle?: string;
  buttonList: Array<customBtnType>;
  titleSize?: number;
  subtitleSize?: number;
};

export function Modal({
  mdVisible,
  title,
  subtitle,
  buttonList,
  titleSize = fontPercentage(17),
  subtitleSize = fontPercentage(14),
}: IModalsProps) {
  const [last, second, ...first]: Array<customBtnType | undefined> = [
    ...buttonList,
  ].reverse();

  return (
    <RNModal animationType="fade" visible={mdVisible} transparent={true}>
      <View style={styles.modalView}>
        {second ? (
          <View style={styles.content}>
            <Text style={[styles.title, {fontSize: titleSize}]}>{title}</Text>
            {subtitle && (
              <Text style={[styles.subtitle, {fontSize: subtitleSize}]}>
                {subtitle}
              </Text>
            )}
          </View>
        ) : (
          <View style={styles.oneBtnContent}>
            <Text style={[styles.title, {fontSize: titleSize}]}>{title}</Text>
            {subtitle && (
              <Text style={[styles.subtitle, {fontSize: subtitleSize}]}>
                {subtitle}
              </Text>
            )}
          </View>
        )}
        {first.map((result, i) => {
          return (
            result! && (
              <CTAButton
                key={i}
                title={result.buttonText}
                onClickListener={result.buttonClickListener}
                titleStyle={styles.btnListTitle}
                btnStyle={styles.btnList}
              />
            )
          );
        })}
        {second! && (
          <CTAButton
            title={second.buttonText}
            onClickListener={second.buttonClickListener}
            titleStyle={styles.btnListTitle}
            btnStyle={styles.whiteLastBtn}
          />
        )}
        {last! && (
          <CTAButton
            title={last.buttonText}
            onClickListener={last.buttonClickListener}
            titleStyle={styles.blueLastBtnTitle}
            btnStyle={styles.blueLastBtn}
          />
        )}
      </View>
    </RNModal>
  );
}
