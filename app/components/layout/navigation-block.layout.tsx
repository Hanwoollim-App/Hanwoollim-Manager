import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

type INavigationBlockProps = {
  title: string;
  onClickListener: Function;
  titleStyle: Object;
  btnStyle: Object;
  icon?: React.ReactNode;
  iconStyle?: Object;
};

export function NavigationBlock({
  title,
  onClickListener,
  titleStyle,
  btnStyle,
  icon,
  iconStyle,
}: INavigationBlockProps) {
  return (
    <TouchableOpacity onPress={() => onClickListener()} style={btnStyle}>
      <Text style={titleStyle}>{title}</Text>
      <View style={iconStyle}>{icon}</View>
    </TouchableOpacity>
  );
}
