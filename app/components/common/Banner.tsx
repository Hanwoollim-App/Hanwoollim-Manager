import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

interface CustomBtnProps {
  title: string;
  onClickListener: Function;
  titleStyle: Object;
  btnStyle: Object;
  icon: React.ReactNode;
  iconStyle: Object;
}
function Banner({
  title,
  onClickListener,
  titleStyle,
  btnStyle,
  icon,
  iconStyle,
}: CustomBtnProps) {
  return (
    <TouchableOpacity onPress={() => onClickListener()} style={btnStyle}>
      <Text style={titleStyle}>{title}</Text>
      <View style={iconStyle}>{icon}</View>
    </TouchableOpacity>
  );
}

export default React.memo(Banner);
