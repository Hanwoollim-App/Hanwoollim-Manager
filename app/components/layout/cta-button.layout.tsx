import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ICTAButtonProps = {
  title: string;
  onClickListener: Function;
  titleStyle: Object;
  btnStyle: Object;
};

export function CTAButton({
  title,
  onClickListener,
  titleStyle,
  btnStyle,
}: ICTAButtonProps) {
  return (
    <TouchableOpacity onPress={() => onClickListener()} style={btnStyle}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
