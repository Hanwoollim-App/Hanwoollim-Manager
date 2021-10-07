import React, {useState, useCallback, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
} from 'react-native';
import isNull from 'lodash/isNull';
import { useAsyncCallback } from 'react-async-hook';
import DropDownPicker, { ItemType, ValueType } from 'react-native-dropdown-picker';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useIsFocused,
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
import { weekItems } from '../../../../utils/constant/reservation/timeTable/timeTable';
import { emptyReservation } from './reservation-time-table.data';

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
  const [open, setOpen] = useState<boolean>(false);

  const [targetDateValue, setTargetDateValue] = useState<ValueType>(null);
	const [startDates, setStartDates] = useState<Array<ItemType>>(weekItems);
	const [reservationData, setReservationData] = useState(null);
	const isFocused = useIsFocused();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const findStartDate = () =>
  startDates.filter((startDate) => startDate.value === targetDateValue)[0]
    .value;


  const reserveBtnListener = () => {
    if (isNull(targetDateValue)) {
			return;
		}
    setModalVisible(!modalVisible);
    
  };

  const returnToTimeTable = () => {
    setModalVisible(!modalVisible);
  };

  const fixedBand = () => {
    setModalVisible(!modalVisible);
    const weekName = weekItems.filter(
			(item) => item.value === targetDateValue,
		)[0];

		const targetStartDate = findStartDate();

		navigation.navigate('ReservationNavigator', {
      screen: 'ReservationBandProcess',
      params:{
			currentWeek: weekName,
			monday: targetStartDate,
      }
		});

  };

  const mentoring = () => {
    setModalVisible(!modalVisible);
    const weekName = weekItems.filter(
			(item) => item.value === targetDateValue,
		)[0];

		const targetStartDate = findStartDate();
    
		navigation.navigate('ReservationNavigator', {
      screen: 'ReservationMentoringProcess',
      params: {
        currentWeek: weekName,
        monday: targetStartDate,
      }
		});

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

  const {
		execute: handleUpdateReservationData,
		loading: isUpdatingReservationData,
	} = useAsyncCallback(async () => {
		if (isNull(targetDateValue)) {
			return;
		}
		const targetStartDate = findStartDate();

		try {
			const { data } = await getReservation(targetStartDate as string);

			if (data.length) {
				setReservationData(data[0]);
				return;
			}

			setReservationData(emptyReservation);
		} catch (err) {
			console.log(err.response);
		}
	});

  useEffect(() => {
		if (isFocused) {
			(async () => handleUpdateReservationData())();
		}
	}, [targetDateValue, isFocused]);

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
						value={targetDateValue}
						items={startDates}
						setOpen={setOpen}
						setValue={setTargetDateValue}
						setItems={setStartDates}
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
			<ScrollView>
				{targetDateValue && reservationData && (
					<TimeTable
						isLoading={isUpdatingReservationData}
						reservationData={reservationData}
					/>
				)}
			</ScrollView>
		</ScreenWrapper>
  );
}
