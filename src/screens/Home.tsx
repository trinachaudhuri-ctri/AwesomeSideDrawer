import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import Tab1 from './Tab1';
import {IProps} from '../types/navigationType';

const Home: React.FC<IProps> = ({navigation}) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, -10]); // Rotate the screen
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 1]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 80]);

    return {
      transform: [{translateX}, {rotateZ: `${rotate}deg`}],
      borderBottomLeftRadius: borderRadius,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          backgroundColor: 'red',
        },
        animatedStyle,
      ]}>
      <Tab1 navigation={navigation} />
    </Animated.View>
  );
};

export default Home;
