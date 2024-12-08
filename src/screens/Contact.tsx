import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Styles} from '../styles/style';

type DrawerParamList = {
  Tab1: undefined;
  Contact: undefined;
};

type ContactNavigationProp = DrawerNavigationProp<DrawerParamList, 'Contact'>;

interface ContactProps {
  navigation: ContactNavigationProp;
}

export default function Contact({navigation}: any) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.contacttextcontainer}
        onPress={() => {
          navigation.navigate('Tab1');
        }}>
        <Text>Go To Home</Text>
      </TouchableOpacity>
    </View>
  );
}
