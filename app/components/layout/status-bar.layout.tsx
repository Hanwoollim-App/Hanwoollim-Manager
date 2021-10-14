import React from 'react';
import {
  StatusBar as RNStatusBar,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import {heightPercentage, color} from '../../utils';

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? heightPercentage(47.5) : RNStatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: color.mainColor,
  },
});

export function StatusBar() {
  return (
    <View style={styles.statusBar}>
      <RNStatusBar
        translucent
        backgroundColor={color.mainColor}
        barStyle="light-content"
      />
    </View>
  );
}
