import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Tab2 from '../screens/Tab2';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tab2" component={Tab2} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
