import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../../../../utils/api/responsive/responsive.api';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  item: {
    width: widthPercentage(307),
    height: heightPercentage(50),
    marginTop: heightPercentage(5),
    marginHorizontal: widthPercentage(14),
  },
  title: {
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(16),
    textAlign: 'left',
    color: '#000000',
    lineHeight: heightPercentage(27),
  },
  date: {
    height: heightPercentage(17),
    fontFamily: 'NotoSansKR-Regular',
    fontSize: fontPercentage(12),
    textAlign: 'left',
    color: '#808080',
    lineHeight: heightPercentage(20),
  },
});

export type INoticeItemProps = {
  title: string;
  date: string;
};

export function NoticeItem({title, date}: INoticeItemProps) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const NoticeClickListener = () => {
    navigation.navigate('NoticeNavigator', {screen: 'NoticeDetail'});
  };

  return (
    <TouchableOpacity onPress={NoticeClickListener}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}
