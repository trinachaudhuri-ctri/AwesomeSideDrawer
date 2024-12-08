import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {AnimatedHookProp} from '../types/animatedHookType';
import {interpolate, useAnimatedStyle} from 'react-native-reanimated';

export default function useCustomDrawerProgress({
  drawerProgress,
}: AnimatedHookProp) {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [0.85, 1]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [-50, 0]);
    const opacity = interpolate(drawerProgress.value, [0, 1], [0.5, 1]);
    const scaleY = interpolate(drawerProgress.value, [0, 1], [1, 0.95]);
    return {
      transform: [{scale}, {translateX}, {scaleY}],
      opacity,
    };
  });
  return animatedStyle;
}
