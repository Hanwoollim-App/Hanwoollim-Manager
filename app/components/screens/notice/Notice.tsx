import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
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
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../utils/constant/common/design/Responsive';
import searchIcon from '../../../assets/images';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  searchTextInput: {
    width: widthPercentage(335),
    height: heightPercentage(58),
    marginTop: heightPercentage(20),
    marginLeft: widthPercentage(20),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: widthPercentage(10),
    backgroundColor: 'white',
    fontSize: fontPercentage(20),
    fontFamily: 'NotoSansKR-Bold',
    paddingLeft: 13,
  },
  ImageStyle: {
    width: widthPercentage(25),
    height: heightPercentage(25),
    marginTop: heightPercentage(37),
    marginLeft: widthPercentage(-40),
  },
  SectionStyle: {
    flexDirection: 'row',
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
      <View style={styles.root}>
        <CustomHeader
          headerTitle={HEADER_TITLE.Notice}
          headerLeft={true}
          leftIcon={icon}
          leftIconClickListner={navigation.goBack}
        />
        <View style={styles.SectionStyle}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="검색"
            placeholderTextColor="#a2a2a2"
          />
          <Image
            source={require('../../../assets/images/searchIcon.png')}
            style={styles.ImageStyle}
          />
        </View>
      </View>
    </>
  );
}

export default Notice;
