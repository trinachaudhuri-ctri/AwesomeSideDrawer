import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  animatedBackgroundcontainer: {
    flex: 1,
  },
  animatedbackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#1e1e1e',
  },
  drawerBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  drawerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  drawerMenuItem: {
    marginVertical: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  drawerMenuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  container: {
    backgroundColor: '#f6f6f6',
    overflow: 'hidden',
    paddingTop: '10%',
    shadowColor: '#000',
    shadowOffset: {width: -5, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '100%',
    height: '100%',
  },
  hamburgerButton: {
    padding: 20,
  },
  hamburgerLine: {
    width: 30,
    height: 4,
    backgroundColor: '#000',
    marginVertical: 3,
  },
  contacttextcontainer: {
    paddingTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
});
