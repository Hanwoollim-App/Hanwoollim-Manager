import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentage, fontPercentage, color} from '../../utils';

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
    lineHeight: heightPercentage(30),
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

type IHeaderProps = {
  headerTitle?: String;
  headerLeft?: boolean;
  headerRight?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconClickListener?: Function;
  rightIconClickListener?: Function;
};

export function Header({
  headerTitle,
  headerLeft = false,
  headerRight = false,
  leftIcon,
  rightIcon,
  leftIconClickListener = () => {},
}: IHeaderProps) {
  return (
    <View style={styles.header}>
      {headerLeft ? (
        <TouchableOpacity
          onPress={() => leftIconClickListener()}
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
          onPress={() => leftIconClickListener()}
          style={styles.headerRight}>
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.headerRight}></View>
      )}
    </View>
  );
}
