import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';

// Define navigation types for Drawer and Bottom Tabs
export type DrawerNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Tab2: undefined;
};

// Combine navigation types
export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Home'>,
  DrawerNavigationProp<DrawerNavigatorParamList>
>;

// Props type
export type IProps = {
  navigation: HomeScreenNavigationProp;
};
