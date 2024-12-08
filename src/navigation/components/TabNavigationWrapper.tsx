import React from 'react';
import TabNavigator from '../TabNavigator';
import AnimatedBackground from './AnimatedBackground';

export default function TabNavigationWrapper() {
  return (
    <AnimatedBackground>
      <TabNavigator />
    </AnimatedBackground>
  );
}
