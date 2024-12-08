import {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {AnimatedHookProp} from '../types/animatedHookType';

export default function useAnimatedScreen({drawerProgress}: AnimatedHookProp) {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.85]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, -40]);
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, -5]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 40]);

    return {
      transform: [{scale}, {translateX}, {rotateZ: `${rotate}deg`}],
      borderRadius,
      shadowOpacity: drawerProgress.value,
      zIndex: 2,
      elevation: 5,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
    };
  });

  return animatedStyle;
}
