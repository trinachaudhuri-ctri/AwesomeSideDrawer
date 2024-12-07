import {View, Text} from 'react-native';
import React from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';

export default function DrawerCustomContent() {
  const drawerProgress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);

    return {
      transform: [{scale}],
    };
  });

  return <Animated.View style={viewStyles}></Animated.View>;
}
