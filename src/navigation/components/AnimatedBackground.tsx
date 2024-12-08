import {useDrawerProgress} from '@react-navigation/drawer';
import {View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {Styles} from '../../styles/style';
import {ReactNode} from 'react';

interface AnimatedBackgroundProps {
  children: ReactNode;
}

const AnimatedBackground = ({children}: AnimatedBackgroundProps) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1]);
    return {opacity};
  });

  return (
    <View style={Styles.animatedBackgroundcontainer}>
      <Animated.View style={[Styles.animatedbackground, animatedStyle]} />
      {children}
    </View>
  );
};

export default AnimatedBackground;
