import React, {useState, useCallback} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
  getReservation,
} from '../../../../utils';
import {weekItem} from '../reservation.data';
import {IScheduleType, IWeekItem} from '../reservation.type';
import {ScreenWrapper, Modal, ICTAButton} from '../../../layout';
import {TimeTable} from './components';

const styles = StyleSheet.create({
  titleBlock: {
    width: '95%',
    alignItems: 'center',
    height: heightPercentage(66),
  },
  row: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: heightPercentage(66),
    ...Platform.select({
      ios: {
        zIndex: 1000,
      },
      android: {},
    }),
  },
  picker: {
    width: widthPercentage(162),
    height: heightPercentage(36),
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveBtn: {
    width: widthPercentage(146),
    height: heightPercentage(36),
    borderRadius: widthPercentage(15),
    borderWidth: widthPercentage(1),
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#00203f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reserveBtnText: {
    height: heightPercentage(20),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(14),
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#00203f',
  },
  dropDown: {
    width: widthPercentage(162),
    height: heightPercentage(36),
    borderRadius: widthPercentage(10),
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  dropDownText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropDownContainer: {
    borderRadius: widthPercentage(10),
    minHeight: heightPercentage(50),
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
  },
  placeholder: {color: 'grey'},
});

export function ReservationTimeTable() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Array<IWeekItem>>(weekItem);
  const [weekNum, setWeekNum] = useState<number | null>(null);
  const [schedule, setSchedule] = useState<Array<Array<IScheduleType>>>();

  const reserveBtnListener = () => {
    if (weekNum !== null) {
      setModalVisible(!modalVisible);
    }
  };

  const returnToTimeTable = () => {
    setModalVisible(!modalVisible);
  };

  const fixedBand = () => {
    setModalVisible(!modalVisible);
    if (weekNum !== null) {
      navigation.navigate('ReservationBandProcess', {
        currentWeek: date[weekNum].label,
        monday: date[weekNum].monday,
      });
    }
  };

  const mentoring = () => {
    setModalVisible(!modalVisible);
    if (weekNum !== null) {
      navigation.navigate('ReservationMentoringProcess', {
        currentWeek: date[weekNum].label,
        monday: date[weekNum].monday,
      });
    }
  };

  const modalBtn: Array<ICTAButton> = [
    {
      buttonText: '고정합주',
      buttonClickListener: fixedBand,
    },
    {
      buttonText: '멘토링',
      buttonClickListener: mentoring,
    },
    {
      buttonText: '취소',
      buttonClickListener: returnToTimeTable,
    },
  ];

  useFocusEffect(
    useCallback(() => {
      if (weekNum !== null) {
        console.log(date[weekNum].monday);
        getReservation(date[weekNum].monday).then((res) => {
          setSchedule(res.data);
        });
      }
    }, [weekNum]),
  );

  return (
    <ScreenWrapper headerTitle="예약하기">
      <Modal
        mdVisible={modalVisible}
        title={'어떤 작업을 수행하시겠습니까?'}
        buttonList={modalBtn}
      />
      <View style={styles.row}>
        <View>
          <DropDownPicker
            open={open}
            value={weekNum}
            items={date}
            setOpen={setOpen}
            setValue={setWeekNum}
            setItems={setDate}
            style={styles.dropDown}
            textStyle={styles.dropDownText}
            dropDownContainerStyle={styles.dropDownContainer}
            placeholderStyle={styles.placeholder}
          />
        </View>
        <TouchableOpacity
          style={styles.reserveBtn}
          onPress={reserveBtnListener}>
          <Text style={styles.reserveBtnText}>예약하기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>{schedule && <TimeTable schedule={schedule} />}</ScrollView>
    </ScreenWrapper>
  );
}
