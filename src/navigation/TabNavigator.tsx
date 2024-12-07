import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Tab2 from '../screens/Tab2';
import StackNavigator from './Stacknavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Tab1" component={StackNavigator} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
}
