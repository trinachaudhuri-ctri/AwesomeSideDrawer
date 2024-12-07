import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {Styles} from '../styles/style';
import {IProps} from '../types/navigationType';

const Tab2: React.FC<IProps> = ({navigation}) => {
  const drawerProgress = useDrawerProgress();

  const animatedContainerStyle = useAnimatedStyle(() => {
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, -10]); // Rotate the screen
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 1]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 80]);

    return {
      transform: [{translateX}, {rotateZ: `${rotate}deg`}],
      borderBottomLeftRadius: borderRadius,
      zIndex: drawerProgress.value === 1 ? 2 : 0,
      position: 'absolute',
    };
  });
  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'yellow',
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 100000,
        },
        animatedContainerStyle,
      ]}>
      <SafeAreaView>
        <Animated.View style={Styles.tab2containerStyle}>
          <Pressable
            style={Styles.hamburgerButton}
            onPress={() => navigation.openDrawer()}>
            <Animated.View style={[Styles.hamburgerLine]} />
            <Animated.View style={Styles.hamburgerLine} />
            <Animated.View style={Styles.hamburgerLine} />
          </Pressable>
          <Animated.Text>
            Welcome to my awesome drawer navigator project!!
          </Animated.Text>
        </Animated.View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Tab2;
