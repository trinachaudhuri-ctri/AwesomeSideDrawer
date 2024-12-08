import {
  DrawerNavigationProp,
  useDrawerProgress,
} from '@react-navigation/drawer';
import React from 'react';
import {StatusBar, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {interpolate} from 'react-native-reanimated';
import useCustomDrawerProgress from '../../hooks/useCustomDrawerProgress';
import {Styles} from '../../styles/style';

type DrawerParamList = {
  Tab1: undefined;
  Contact: undefined;
};

// Define the navigation prop type for DrawerCustomContent
type DrawerCustomContentProps = {
  navigation: DrawerNavigationProp<DrawerParamList>;
};

const DrawerCustomContent = ({navigation}: DrawerCustomContentProps) => {
  const drawerProgress = useDrawerProgress();

  const animatedStyle = useCustomDrawerProgress({drawerProgress});

  const statusBarColor = interpolate(drawerProgress.value, [0, 1], [0, 1]);
  const statusBarStyle =
    statusBarColor === 1 ? 'dark-content' : 'light-content';

  return (
    <>
      <StatusBar
        animated
        barStyle={statusBarStyle}
        backgroundColor={statusBarColor === 1 ? '#1e1e1e' : '#ffffff'}
      />
      <LinearGradient
        colors={['#1e1e1e', '#4a4a4a']}
        style={Styles.drawerBackground}>
        <Animated.View style={[Styles.drawerContainer, animatedStyle]}>
          <TouchableOpacity
            style={Styles.drawerMenuItem}
            onPress={() => navigation.navigate('Tab1')}>
            <Text style={Styles.drawerMenuText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.drawerMenuItem}
            onPress={() => navigation.navigate('Contact')}>
            <Text style={Styles.drawerMenuText}>Contact</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </>
  );
};

export default DrawerCustomContent;
