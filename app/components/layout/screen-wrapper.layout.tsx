import React from 'react';
import {View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import defaultStyle from '../../utils/data/default-style/default-style.data.ts';
import {Header} from './header.layout';
import {StatusBar} from './status-bar.layout';

type IScreenWrapper = {
  children: React.ReactNode;
  headerTitle?: string;
};
const icon = <FontAwesomeIcon style={{color: 'white'}} icon={faChevronLeft} />;

export function ScreenWrapper({children, headerTitle}: IScreenWrapper) {
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={defaultStyle.root} edges={['bottom']}>
        <View style={defaultStyle.header}>
          <Header
            headerTitle={headerTitle ?? undefined}
            headerLeft
            leftIcon={icon}
            leftIconClickListener={navigation.goBack}
          />
        </View>
        <View style={defaultStyle.contents}>{children}</View>
      </SafeAreaView>
    </>
  );
}
