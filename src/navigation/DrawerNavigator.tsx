import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../screens/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import DrawerCustomContent from './components/DrawerCustomContent';
import TabNavigationWrapper from './components/TabNavigationWrapper';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustomContent {...props} />}
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 300,
        drawerStyle: {
          width: '60%',
        },
        headerShown: false,
        overlayColor: 'transparent',
      }}>
      <Drawer.Screen name="Tab1" component={TabNavigationWrapper} />
      <Drawer.Screen
        name="Contact"
        component={() => (
          <AnimatedBackground>
            <Contact navigation={navigation} />
          </AnimatedBackground>
        )}
      />
    </Drawer.Navigator>
  );
}
