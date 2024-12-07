import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import Tab2 from '../screens/Tab2';
import TabNavigator from './TabNavigator';
import Tab1 from '../screens/Tab1';
import StackNavigator from './Stacknavigator';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 100,
        sceneStyle: {backgroundColor: 'transparent'},
        drawerStyle: {
          width: '40%',
          backgroundColor: 'transparent',
        },
        headerShown: false,
      }}>
      <Drawer.Screen name="Tab" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
