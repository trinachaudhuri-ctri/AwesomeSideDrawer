import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {CompositeNavigationProp} from '@react-navigation/native';

export type DrawerNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Tab2: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParamList, 'Home'>,
  DrawerNavigationProp<DrawerNavigatorParamList>
>;

export type IProps = {
  navigation: HomeScreenNavigationProp;
};
