import {View, Text, StatusBar, SafeAreaView, Pressable} from 'react-native';
import React from 'react';
import {Styles} from '../styles/style';
import {IProps} from '../types/navigationType';

const Tab1: React.FC<IProps> = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={Styles.tab1containerStyle}>
        <Pressable
          style={Styles.hamburgerButton}
          onPress={() => navigation.openDrawer()}>
          {/* Simple Hamburger Menu Icon */}
          <View style={Styles.hamburgerLine} />
          <View style={Styles.hamburgerLine} />
          <View style={Styles.hamburgerLine} />
        </Pressable>
        <Text>Welcome to my awesome drawer navigator project!!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Tab1;
