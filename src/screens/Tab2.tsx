import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import useAnimatedScreen from '../hooks/useAnimatedScreen';
import {Styles} from '../styles/style';
import {IProps} from '../types/navigationType';

const Tab2: React.FC<IProps> = ({navigation}) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useAnimatedScreen({drawerProgress});

  return (
    <Animated.View style={[Styles.container, animatedStyle]}>
      <SafeAreaView>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={Styles.hamburgerButton}>
          <Animated.View style={Styles.hamburgerLine} />
          <Animated.View style={Styles.hamburgerLine} />
          <Animated.View style={Styles.hamburgerLine} />
        </Pressable>
        <Text style={Styles.welcomeText}>Welcome to Tab 2</Text>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Tab2;
