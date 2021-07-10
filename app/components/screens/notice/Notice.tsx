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
import HEADER_TITLE from '../../../utils/constant/naviagation/NavigationheaderUtils';
import CustomStatusBar from '../../common/CustomStatusBar';

const sytles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

function Notice() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const icon = (
    <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />
  );

  return (
    <>
      <CustomStatusBar />
      <View style={sytles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Notice}
          headerLeft={true}
          leftIcon={icon}
          leftIconClickListner={navigation.goBack}
        />
        <Text>{'공지사항 화면입니다.'}</Text>
      </View>
    </>
  );
}

export default Notice;
