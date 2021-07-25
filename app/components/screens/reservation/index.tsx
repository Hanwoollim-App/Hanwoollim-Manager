import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import CustomHeader from '../../common/CustomHeader';
import HEADER_TITLE from '../../../utils/constant/naviagation';
import CustomStatusBar from '../../common/CustomStatusBar';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

function Reservation() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );

  return (
    <>
      <CustomStatusBar />
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Reservation}
          headerLeft
          leftIcon={icon}
          leftIconClickListener={navigation.goBack}
        />
        <Text>{'예약 화면입니다.'}</Text>
      </View>
    </>
  );
}

export default Reservation;
