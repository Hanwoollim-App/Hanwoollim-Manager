import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentage,
  fontPercentage,
} from '../../utils/constant/common/design/Responsive';
import color from '../../utils/constant/common/design/Color';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: heightPercentage(57),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.mainColor,
  },
  headerText: {
    fontFamily: 'NotoSansKR-Bold',
    fontSize: fontPercentage(20),
    color: 'white',
  },
  headerCenter: {
    flex: 76,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface HeaderInterface {
  headerTitle: String;
  headerLeft?: boolean;
  headerRight?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconClickListner?: Function;
  rightIconClickLister?: Function;
}
function CustomHeader({
  headerTitle,
  headerLeft = false,
  headerRight = false,
  leftIcon,
  rightIcon,
  leftIconClickListner = () => {},
  rightIconClickLister = () => {},
}: HeaderInterface) {
  return (
    <View style={styles.header}>
      {headerLeft ? (
        <TouchableOpacity
          onPress={() => leftIconClickListner()}
          style={styles.headerLeft}>
          {leftIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.headerLeft}></View>
      )}
      <View style={styles.headerCenter}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>
      {headerRight ? (
        <TouchableOpacity
          onPress={() => leftIconClickListner()}
          style={styles.headerRight}>
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.headerRight}></View>
      )}
    </View>
  );
}

export default CustomHeader;
