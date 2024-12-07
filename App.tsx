import {View, Text} from 'react-native';
import React from 'react';
import {DrawerContent} from '@react-navigation/drawer';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
