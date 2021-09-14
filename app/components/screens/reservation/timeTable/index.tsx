import React, {useState} from 'react';
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
  useNavigation,
} from '@react-navigation/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../../utils/constant/common/design/Responsive';
import ScreenWrapper from '../../../common/ScreenWrapper';
import {ItemType, ValueType} from '../../../../utils/types/dropDown';
import TimeTable from './timeTable';
import {customBtnType} from '../../../../utils/types/customModal';
import CustomModal from '../../../common/CustomModal';
import {
  weekItem,
  weekItemInterface,
} from '../../../../utils/constant/reservation';
import scheduleType from '../../../../utils/types/reservation';

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

function ReservationTimeTable() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Array<weekItemInterface>>(weekItem);
  const [weekNum, setWeekNum] = useState<number | null>(null);
  const [schedule, setSchedule] = useState<Array<Array<scheduleType>>>();

  const reserveBtnListener = () => {
    setModalVisible(!modalVisible);
  };

  const returnToTimeTable = () => {
    setModalVisible(!modalVisible);
  };

  const fixedBand = () => {
    navigation.navigate('BandReservationProcess', {value});
    setModalVisible(!modalVisible);
  };

  const mentoring = () => {
    navigation.navigate('MentoringReservationProcess', {value});
    setModalVisible(!modalVisible);
  };

  const modalBtn: Array<customBtnType> = [
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

  return (
    <ScreenWrapper headerTitle="예약하기">
      <CustomModal
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
      <ScrollView>
        <TimeTable />
      </ScrollView>
    </ScreenWrapper>
  );
}

export default ReservationTimeTable;
