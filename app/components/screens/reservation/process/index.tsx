import React, {useEffect, useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, StyleSheet, Text, Platform, ScrollView} from 'react-native';
import CustomBtn from '../../../layout/cta-button.layout';
import color from '../../../../utils/data/color/type';
import {
  dayItems,
  PROCESS_TEXT,
  RESERVATION_TYPE,
  timeItems,
  times,
} from '../../../../utils/constant/reservation/process/reservationProcess';
import CustomModal from '../../../layout/modal.layout';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../../utils/api/responsive/responsive.api';
import ScreenWrapper from '../../../layout/screen-wrapper.layout';
import {customBtnType} from '../../../../utils/types/customModal';
import {ItemType} from '../../../../utils/types/dropDown';
import {postReservation} from '../../../../utils/api/axios';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bodyContainer: {
    width: widthPercentage(335),
    height: heightPercentage(760),
    marginHorizontal: widthPercentage(20),
    marginTop: heightPercentage(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {
        zIndex: 100,
      },
      android: {},
    }),
  },
  dayPicker: {
    width: widthPercentage(154),
    height: heightPercentage(36),
    borderColor: color.mainColor,
  },
  UnitPicker: {
    width: '100%',
    height: heightPercentage(46),
    marginTop: heightPercentage(20),
    ...Platform.select({
      ios: {
        zIndex: 90,
      },
      android: {},
    }),
  },
  startTimePicker: {
    width: '100%',
    height: heightPercentage(46),
    marginTop: heightPercentage(20),
    ...Platform.select({
      ios: {
        zIndex: 90,
      },
      android: {},
    }),
  },
  endTimePicker: {
    width: '100%',
    height: heightPercentage(46),
    marginTop: heightPercentage(20),
    ...Platform.select({
      ios: {
        zIndex: 80,
      },
      android: {},
    }),
  },
  contentContainer: {
    alignItems: 'center',
  },
  timeBox: {
    width: '100%',
    height: heightPercentage(41),
    marginTop: heightPercentage(17),
    borderRadius: fontPercentage(12),
    borderStyle: 'solid',
    borderWidth: fontPercentage(1),
    borderColor: '#bdbdbd',
    ...Platform.select({
      ios: {
        zIndex: 10,
      },
      android: {},
    }),
  },
  sectionInfo__form: {
    flexDirection: 'row',
    marginTop: heightPercentage(20),
    ...Platform.select({
      ios: {
        zIndex: 50,
      },
      android: {},
    }),
  },
  sectionInfo__alert__text: {
    marginTop: heightPercentage(8),
    marginLeft: widthPercentage(-170),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(8),
    letterSpacing: 0,
    textAlign: 'left',
    color: '#363636',
  },
  submit: {
    position: 'absolute',
    width: widthPercentage(290),
    height: heightPercentage(53),
    marginTop: heightPercentage(500),
    borderRadius: fontPercentage(21),
    backgroundColor: color.mainColor,
  },
  submit__btn: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit__text: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(20),
    textAlign: 'center',
    color: '#ffffff',
  },
  dropDown: {
    width: widthPercentage(154),
    height: heightPercentage(36),
    paddingVertical: 0,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  dropDown2: {
    width: widthPercentage(335),
    height: heightPercentage(46),
    paddingVertical: 0,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  dropDownText: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropDownContainer: {
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  dropDownPlaceHolder: {
    color: '#a2a2a2',
  },
  date: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(14),
    textAlign: 'right',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentage(6),
    color: '#000000',
  },
  scrollTime: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(9),
    color: '#6d6d6d',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  scrollTimeBox: {
    width: widthPercentage(19),
    height: heightPercentage(11),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#707070',
    marginTop: heightPercentage(3),
    marginLeft: widthPercentage(3),
  },
  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function BandReservationProcess({route}: any) {
  const {currentWeek, monday} = route.params;

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const changeVisible = () => {
    setModalVisible(!modalVisible);
  };

  const returnToMain = () => {
    navigation.goBack();
  };
  const modalBtn: Array<customBtnType> = [
    {
      buttonText: '확인',
      buttonClickListener: returnToMain,
    },
  ];

  const [day, setDay] = useState<string>('');
  const [dayOpen, setDayOpen] = useState<boolean>(false);
  const [dayItem, setDayItems] = useState<Array<ItemType>>(dayItems);

  const [startTime, setStartTime] = useState<number | null>(null);
  const [startTimeOpen, setStartTimeOpen] = useState<boolean>(false);
  const [startTimeItem, setStartTimeItems] =
    useState<Array<ItemType>>(timeItems);

  const [endTime, setEndTime] = useState<number | null>(null);
  const [endTimeOpen, setEndTimeOpen] = useState<boolean>(false);
  const [endTimeItem, setEndTimeItems] = useState<Array<ItemType>>(timeItems);

  const submitBtnClickListener = () => {
    if (startTime !== null && endTime !== null) {
      postReservation(
        monday,
        RESERVATION_TYPE.Together,
        day,
        startTime,
        endTime,
        '',
        '',
      )
        .then((res) => {
          console.log(JSON.stringify(res, null, 2));
          changeVisible();
        })
        .catch((err) => {
          console.log(JSON.stringify(err, null, 2));
        });
    }
  };

  useEffect(() => {
    if (startTime !== null) {
      const index = timeItems.findIndex((i) => i.value === startTime);

      setEndTimeItems(timeItems.slice(index + 1));
    }
  }, [startTime]);

  useEffect(() => {
    console.log(startTime);
  }, [startTime]);

  return (
    <ScreenWrapper headerTitle="고정합주 예약하기">
      <CustomModal
        mdVisible={modalVisible}
        title={'예약이 완료되었습니다!'}
        buttonList={modalBtn}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.row}>
          <View>
            <DropDownPicker
              open={dayOpen}
              value={day}
              items={dayItem}
              setOpen={setDayOpen}
              setValue={setDay}
              setItems={setDayItems}
              style={styles.dropDown}
              textStyle={styles.dropDownText}
              dropDownContainerStyle={styles.dropDownContainer}
              placeholderStyle={styles.dropDownPlaceHolder}
              placeholder="요일"
              zIndex={10000}
            />
          </View>
          <Text style={styles.date}>{`${currentWeek}`}</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.timeBox}>
            <ScrollView horizontal={true}>
              <View style={styles.alignCenter}>
                {times.map((item) => {
                  return (
                    <>
                      <View>
                        <Text style={styles.scrollTime}>{item.label}</Text>
                        <View style={styles.scrollTimeBox}></View>
                      </View>
                      <View>
                        <Text style={styles.scrollTime}> </Text>
                        <View style={styles.scrollTimeBox}></View>
                      </View>
                    </>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.startTimePicker}>
            <DropDownPicker
              open={startTimeOpen}
              value={startTime}
              items={startTimeItem}
              setOpen={setStartTimeOpen}
              setValue={setStartTime}
              setItems={setStartTimeItems}
              style={styles.dropDown2}
              textStyle={styles.dropDownText}
              dropDownContainerStyle={styles.dropDownContainer}
              placeholderStyle={styles.dropDownPlaceHolder}
              placeholder={PROCESS_TEXT.START}
              zIndex={9000}
            />
          </View>
          <View style={styles.endTimePicker}>
            <DropDownPicker
              open={endTimeOpen}
              value={endTime}
              items={endTimeItem}
              setOpen={setEndTimeOpen}
              setValue={setEndTime}
              setItems={setEndTimeItems}
              style={styles.dropDown2}
              textStyle={styles.dropDownText}
              dropDownContainerStyle={styles.dropDownContainer}
              placeholderStyle={styles.dropDownPlaceHolder}
              placeholder={PROCESS_TEXT.END}
              zIndex={8000}
            />
          </View>
          <View style={styles.submit}>
            <CustomBtn
              title={PROCESS_TEXT.SUBMIT}
              btnStyle={styles.submit__btn}
              titleStyle={styles.submit__text}
              onClickListener={submitBtnClickListener}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default BandReservationProcess;
