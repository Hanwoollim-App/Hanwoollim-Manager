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

  const reserveBtnListener = () => {
    setModalVisible(!modalVisible);
  };

  const fixedBand = () => {
    navigation.navigate('BandReservationProcess');
    setModalVisible(!modalVisible);
  };

  const mentoring = () => {
    navigation.navigate('MentoringReservationProcess');
    setModalVisible(!modalVisible);
  };

  const returnToTimeTable = () => {
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

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<ValueType | null>(null);
  const [items, setItems] = useState<Array<ItemType>>([
    {label: '6.28~7.4', value: '6.28~7.4'},
    {label: '7.4~7.11', value: '7.4~7.11'},
    {label: '7.11~7.18', value: '7.11~7.18'},
    {label: '7.18~7.25', value: '7.18~7.25'},
  ]);

  console.log(JSON.stringify(items));

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
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
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