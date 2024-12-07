import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Styles = StyleSheet.create({
  tab1containerStyle: {
    paddingTop: '20%',
    backgroundColor: 'red',
  },
  tab2containerStyle: {
    paddingTop: '20%',
    backgroundColor: 'yellow',
  },
  largeText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  hamburgerButton: {
    margin: 10,
    padding: 10,
  },
  hamburgerLine: {
    height: 3,
    backgroundColor: 'black',
    marginVertical: 2,
    width: 25,
  },
});
